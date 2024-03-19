const pool = require('../../config/db');
const { getCurrentTimeFormatted } = require('../../utils');

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
                }
            }

            return res.status(200).json({
                code: 200,
                message: 'success',
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
}

module.exports = new SubmissionTrackingService();
