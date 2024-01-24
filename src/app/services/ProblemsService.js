const process = require('process');
const pool = require('../../config/db');
const axios = require('axios');
const { getTestcaseByProblemID, supportConvertCode } = require('../helper/testcase');
const { getProblemLanguageByProblemIdAndLanguageId } = require('../helper/problem_languages');
const {
    getProblemByLevel,
    getProblemByLevelByStatus,
    getProblemByLevelByName,
    getProblemByLevelByStatusByName,
} = require('../helper/problems');

class ProblemsController {
    async index(req, res, next) {
        try {
            const response = await pool.query('SELECT * FROM problems');
            return res.status(200).json(response.rows);
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async show(req, res, next) {
        const problem_id = parseInt(req.params.problem_id);
        try {
            const query = 'SELECT * FROM testcases WHERE problem_id = $1';
            const response = await pool.query(query, [problem_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found testcases successfully',
                    code: 200,
                    body: {},
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async getAllProblems(req, res, next) {
        const limit = parseInt(req.params.limit);
        const offset = parseInt(req.params.offset);
        const userId = parseInt(req.params.user_id);
        console.log(req.params);

        try {
            const count_query = `SELECT COUNT(*) FROM problems`;
            const count_response = await pool.query(count_query);
            if (req.params.offset > count_response.rows[0].count) {
                return res.status(400).json({
                    message: 'Offset is too big',
                    code: 400,
                });
            }

            const query = ` with pr as 
                                (select p.id, p.title, p.likes, p.dislikes, l."name" from problems p join levels l on p.level_id = l.id),
                                up as
                                (select * from user_problems u where u.user_id = $3)
                            SELECT pr.id, pr.title, pr.likes, pr.dislikes, pr.name, up.status  
                            from pr left join up on pr.id = up.problem_id
                            ORDER BY pr.id
                            LIMIT $1 OFFSET $2`;
            const response = await pool.query(query, [limit, offset, userId]);

            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found problems',
                    code: 200,
                    body: response.rows.map((problem) => {
                        return {
                            id: problem.id,
                            title: problem.title,
                            likes: problem.likes,
                            dislikes: problem.dislikes,
                            level: problem.name,
                            status: problem.status === null ? 'Todo' : problem.status,
                        };
                    }),
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async getProblemById(req, res, next) {
        const { problem_id } = req.params;
        const query = `
            SELECT problems.*, levels.name AS level_name
            FROM problems
            JOIN levels ON problems.level_id = levels.id
            WHERE problems.id=$1;
        `;

        try {
            const response = await pool.query(query, [parseInt(problem_id)]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found problem successfully',
                    code: 200,
                    body: response.rows[0],
                });
            } else {
                return res.status(404).json({
                    message: 'Problem not found',
                    code: 404,
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    };

    async getProblemsForFilter(req, res) {
        const userId = req.params.user_id || 'empty';
        const level = req.params.level || 'empty';
        const status = req.params.status || 'empty';
        const search = req.params.search || 'empty';
        console.log(req.params);

        try {
            // Not logged in
            if (search === 'empty') {
                if (userId === 'empty') {
                    const data = await getProblemByLevel(level);
                    return res.status(200).json({
                        message: 'Get problems successfully',
                        code: 200,
                        body: data,
                    });
                } else {
                    const data = await getProblemByLevelByStatus(userId, level, status);
                    return res.status(200).json({
                        message: 'Get problems successfully',
                        code: 200,
                        body: data,
                    });
                }
            } else {
                if (userId === 'empty') {
                    const data = await getProblemByLevelByName(search, level);
                    return res.status(200).json({
                        message: 'Get problems successfully',
                        code: 200,
                        body: data,
                    });
                } else {
                    const data = await getProblemByLevelByStatusByName(userId, level, status, search);
                    return res.status(200).json({
                        message: 'Get problems successfully',
                        code: 200,
                        body: data,
                    });
                }
            }
            // Logged in
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async create(req, res, next) {
        try {
            const { title, level_id, description, instruction, categories, is_public, problem_languages, testcases } = req.body;

            const result = await pool.query(`
                INSERT INTO problems (title, level_id, description, instruction, categories, is_public) 
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *
            `, [title, level_id, description, instruction || "", categories || [], is_public || true]);

            const problem_id = result.rows.length > 0 ? result.rows[0].id : -1;
            if (problem_id === -1) {
                return res.json(422).json({
                    message: 'Problem created failed',
                    code: 422,
                })
            }

            // testcases
            for (let i = 0; i < testcases.length; i++) {
                await pool.query(
                    'INSERT INTO testcases (problem_id, "input", "output") VALUES ($1, $2, $3)',
                    [
                        problem_id,
                        testcases[i].input,
                        testcases[i].output,
                    ],
                );
            }

            // problem_languages
            for (let i = 0; i < problem_languages.length; i++) {
                await pool.query(
                    'INSERT INTO problem_languages (problem_id, language_id, initial_code, solution_code, full_code) VALUES ($1, $2, $3, $4, $5)',
                    [
                        problem_id,
                        problem_languages[i].language_id,
                        problem_languages[i].initial_code,
                        problem_languages[i].solution_code,
                        problem_languages[i].full_code,
                    ],
                );
            }

            return res.status(201).json({
                message: 'Problem created successfully',
                code: 201,
                id: problem_id,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async runCodeWithJobe(req, res, next) {
        try {
            const { problem_id, language } = req.params;
            const { code } = req.body;
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
                    const success =
                        JSON.stringify(testcase.output.trim()) ===
                        JSON.stringify(stdout.trim());
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

            return res.status(200).json({
                message: 'Run code successfully',
                code: 200,
                body: {
                    status: status,
                    compile_info: compile_info,
                    avg_runtime: Math.floor(runtimes / responseTestCase.length),
                    result: final_result,
                    wrong_testcase: wrong_testcase
                },
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async testJobe(req, res, next) {
        try {
            // example payload for cpp
            // { "run_spec":
            //     { "language_id": "cpp",
            //     "sourcefilename": "hello.cpp",
            //     "sourcecode": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}",
            //     "input": "1 2",
            //     }
            // }

            const { language_id, sourcecode } = req.body.run_spec;

            if ((language_id != 'cpp' && language_id != 'python3') || !sourcecode) {
                return res.status(200).json({
                    code: 200,
                    message: 'Cannot run code with jobe',
                    // body: JSON.parse(stdout),
                });
            }

            const payload = JSON.stringify(req.body);
            const headers = {
                'Content-type': 'application/json; charset-utf-8',
            };

            console.log(`${process.env.LOCAL_JOBE_API}/runs`);

            const body = await axios
                .post(`${process.env.LOCAL_JOBE_API}/runs`, req.body, { headers })
                .then((res) => res.data)
                .catch((err) => console.log(err.message));

            return res.status(200).json({
                code: 200,
                message: 'Run code with jobe successfully',
                body: body,
            });
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new ProblemsController();
