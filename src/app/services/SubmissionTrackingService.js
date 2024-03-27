const pool = require('../../config/db');
const axios = require('axios');
const process = require('process');
const { getCurrentTimeFormatted } = require('../../utils');
const { getProblemLanguageByProblemIdAndLanguageId } = require('../helper/problem_languages');
const { getTestcaseByProblemID, supportConvertCode } = require('../helper/testcase');

class SubmissionTrackingService {
    // [GET]
    async index(req, res) {
        try {
            const response = await pool.query('SELECT * FROM submission_trackings');
            return res.status(200).json(response.rows);
        } catch (err) {
            return res.status(500).json({
                code: 500,
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [GET]
    async show(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;
        const topic_problems_id = parseInt(req.params.slug);

        try {
            const response = await pool.query(
                `SELECT * FROM submission_trackings
                WHERE topic_problems_id = ${topic_problems_id} AND user_id = ${userID}`,
            );

            return res.status(200).json({
                code: 200,
                message: 'success',
                body: response.rows,
            });
        } catch (err) {
            return res.status(500).json({
                code: 500,
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [GET]
    async showAllInfo(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;
        const topic_problems_id = parseInt(req.params.slug);

        try {
            const response = await pool.query(
                `select st.retries as submission_trackings_retries, tp.retries as topic_problems_retries, 
                st.start_time as submission_trackings_start_time, tp.start_time as topic_problems_start_time, 
                st.id as submission_trackings_id, *
                from submission_trackings st 
                join topic_problems tp on tp.id = st.topic_problems_id 
                join class_topics ct on ct.id = tp.class_topics_id
                join problems p on p.id = tp.problem_id 
                WHERE st.topic_problems_id = ${topic_problems_id} AND st.user_id = ${userID}`,
            );

            if (response.rows.length > 0) {
                let now = getCurrentTimeFormatted();
                console.log('----------------------------------------------------------------');
                var timePassed = new Date(now) - new Date(response.rows[0].submission_trackings_start_time);

                var remainingMilliseconds = response.rows[0].time_limit * 60 * 1000 - timePassed;
                // console.log(remainingMilliseconds);

                if (remainingMilliseconds < 0) {
                    let newScore = response.rows[0].score;
                    if (response.rows[0].penalty === true) {
                        newScore =
                            (1 - (response.rows[0].submission_trackings_retries - 1) * 0.1) * response.rows[0].score;
                    }
                    const addSubmission = await pool.query(
                        `
                        INSERT INTO submissions (language_id, user_id, problem_id, runtime, memory, status,
                            "datetime", code, score)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    `,
                        [
                            response.rows[0].language_id,
                            userID,
                            response.rows[0].problem_id,
                            response.rows[0].runtime,
                            response.rows[0].memory,
                            response.rows[0].status.length === 0 ? 'Attempted' : 'Solved',
                            response.rows[0].datetime,
                            response.rows[0].code,
                            newScore,
                        ],
                    );

                    const deleteSubmissionTracking = await pool.query(
                        `delete from submission_trackings where id = ${response.rows[0].submission_trackings_id}`,
                    );

                    return res.status(200).json({
                        code: 200,
                        message: 'success',
                        body: [],
                    });
                } else {
                    return res.status(200).json({
                        code: 200,
                        message: 'success',
                        body: response.rows,
                    });
                }
            }
            return res.status(200).json({
                code: 200,
                message: 'success',
                body: [],
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                code: 500,
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [POST]
    async create(req, res) {
        const userID = req.userID;
        const { topic_problems_id, start_time, date_time } = req.body;

        try {
            if (!topic_problems_id || !start_time) {
                return res.status(400).json({
                    code: 400,
                    message: 'Invalid parameters',
                });
            }

            // Need to check it carefully
            const getTopicProblems = await pool.query(`SELECT * FROM topic_problems WHERE id = ${topic_problems_id}`);
            if (getTopicProblems.rows.length === 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'TopicProblems is not found',
                });
            }

            const getUser = await pool.query(`SELECT * FROM users WHERE id = ${userID}`);
            if (getUser.rows.length === 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'User is not found',
                });
            }

            const response = await pool.query(
                `INSERT INTO submission_trackings (language_id, user_id, topic_problems_id, start_time, 
                    code, score, retries, runtime, memory, status, "datetime")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                RETURNING *`,
                [
                    1,
                    userID,
                    topic_problems_id,
                    start_time,
                    '',
                    0.0,
                    0,
                    0.0,
                    0.0,
                    '',
                    date_time || new Date().toString(),
                ],
            );

            return res.status(201).json({
                code: 201,
                message: 'Successfully created',
                body: response.rows,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                code: 500,
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [POST]
    async runCode(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;

        if (userRole === 'normal') {
            return res.status(403).json({
                code: 403,
                message: 'You must have permission to access this class.',
            });
        }

        const { problem_id, language, submission_trackings_id } = req.params;
        const { code, datetime } = req.body;

        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
        };

        const responseTestCase = await getTestcaseByProblemID(problem_id);

        const language_id = language === 'python' ? 1 : 2;
        const problemLanguage = await getProblemLanguageByProblemIdAndLanguageId(problem_id, language_id);
        const outcome_message = {
            11: 'Compilation Error',
            12: 'Runtime Error',
            13: 'Time Limit Exceeded',
            15: 'OK',
            17: 'Memory Limit Exceeded',
            19: 'Illegal system call',
            20: 'Internal Error',
            21: 'Server Overload',
        };
        var status = 'Accepted';
        var compile_info = '';
        var final_result = [];
        var runtimes = 0;
        var wrong_testcase = null;

        for (var i = 0; i < responseTestCase.length; i++) {
            const testcase = responseTestCase[i];
            const input = testcase.input;
            const newCode = await supportConvertCode(code, problemLanguage.full_code);

            const payload = JSON.stringify({
                run_spec: {
                    input,
                    language_id: language === 'python' ? 'python3' : 'cpp',
                    sourcecode: JSON.parse(newCode),
                },
            });

            // console.log(payload);

            const start_timestamp = process.hrtime();

            const { run_id, outcome, cmpinfo, stdout, stderr } = await axios
                .post(`${process.env.LOCAL_JOBE_API}/runs`, payload, { headers })
                .then((res) => res.data)
                .catch((err) => console.log(err));

            const end_timestamp = process.hrtime(start_timestamp);

            console.log('Run test case', testcase.id, outcome_message[parseInt(outcome)]);

            if (parseInt(outcome) !== 15) {
                status = outcome_message[parseInt(outcome)];
                if (parseInt(outcome) === 11) {
                    compile_info = cmpinfo;
                }
                break;
            }
            // else: outcome = 15
            else {
                // IMPORTANT: condition to compare stdout vs expected
                // Using Array.trim() to remove leading and trailing whitespace (i.e. ' ', '\n', ...)
                const success = JSON.stringify(testcase.output.trim()) === JSON.stringify(stdout.trim());
                const runtime = end_timestamp[0] * 1000 + end_timestamp[1] / 1000000; // convert to milliseconds
                runtimes += runtime;

                const result_obj = {
                    testcase: i,
                    success: success,
                    output: stdout,
                    error: stderr,
                };

                final_result.push(result_obj);

                if (!success) {
                    if (i < 3) {
                        status = 'Wrong answer';
                    } else if (i >= 3 && status === 'Wrong answer') {
                        break;
                    } else {
                        // store first wrong hidden test case
                        wrong_testcase = {
                            ...testcase,
                            actual_output: stdout,
                        };
                        status = 'Wrong answer';
                        break;
                    }
                }
            }
        }

        const avg_runtime = Math.floor(runtimes / responseTestCase.length);

        let count = 0;
        for (let i = 0; i < final_result.length; i++) {
            if (final_result[i].success) count++;
        }

        let score = (count / responseTestCase.length) * 10;
        score = score.toFixed(2);

        const memory = 0;
        const update = await pool.query(
            `
            UPDATE submission_trackings
            SET language_id = $1, code = $2, status = $3, runtime = $4, memory = $5, "datetime" = $6, score = $7
            WHERE id = $8
        `,
            [language_id, code, status, avg_runtime, memory, datetime, score, submission_trackings_id],
        );

        console.log(update);

        return res.status(200).json({
            message: 'Run code successfully',
            code: 200,
            body: {
                status: status,
                compile_info: compile_info,
                avg_runtime,
                result: final_result,
                wrong_testcase: wrong_testcase,
            },
        });
    }

    // [POST]
    async submitCode(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;

        if (userRole === 'normal') {
            return res.status(403).json({
                code: 403,
                message: 'You must have permission to access this class.',
            });
        }

        const { submission_trackings_id } = req.params;

        try {
            const getSubmissionTrackings = await pool.query(`
                select * from submission_trackings where id = ${submission_trackings_id}
            `);

            console.log(getSubmissionTrackings.rows[0]);

            // Need to optimize

            const addSubmission = await pool.query(
                `INSERT INTO submissions (language_id, user_id, problem_id, runtime, memory, status,
                    "datetime", code, score)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                `,
                [
                    getSubmissionTrackings.rows[0].language_id,
                    userID,
                    getSubmissionTrackings.rows[0].problem_id,
                    getSubmissionTrackings.rows[0].runtime,
                    getSubmissionTrackings.rows[0].memory,
                    getSubmissionTrackings.rows[0].status.length === 0 ? 'Attempted' : 'Solved',
                    getSubmissionTrackings.rows[0].datetime,
                    getSubmissionTrackings.rows[0].code,
                    getSubmissionTrackings.rows[0].score,
                ],
            );

            const deleteSubmissionTracking = await pool.query(
                `delete from submission_trackings where id = ${getSubmissionTrackings.rows[0].id}`,
            );

            return res.status(200).json({
                code: 200,
                message: 'success',
                body: [],
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                code: 500,
                message: 'Internal Server Error',
                error: err,
            });
        }
    }
}

module.exports = new SubmissionTrackingService();
