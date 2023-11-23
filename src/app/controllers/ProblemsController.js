const fs = require('fs');
const { PythonShell } = require('python-shell');
const process = require('process');
const pool = require('../../config/db');
const axios = require('axios');
const { exec } = require('child_process');
const {
    getTestcaseByProblemID,
    isNumber,
    isArray,
    supportSubmitCode,
    supportConvertCode,
    supportCpp,
} = require('../helper/testcase');
const { count } = require('console');
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

    async runCode(req, res, next) {
        const language = req.params.language;
        const { code } = req.body;
        var testcases = [];
        var numParams;

        const responseTestCase = await getTestcaseByProblemID(req.params.problem_id);

        responseTestCase.forEach((testcase) => {
            var inputs = testcase.input.split(' ');
            numParams = inputs.length;
            testcases.push(inputs);
        });

        let finalResult = [];

        if (language === 'cpp') {
            const executeCommand = async (command) => {
                return new Promise((resolve, reject) => {
                    var startTimeC = process.hrtime();
                    exec(command, (error, stdout, stderr) => {
                        var endTimeC = process.hrtime(startTimeC);
                        const executionTimeC = (endTimeC[0] * 1e9 + endTimeC[1]) / 1e6;
                        const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
                        if (error) {
                            reject(error);
                            return;
                        }
                        if (stderr) {
                            reject(new Error(stderr));
                            return;
                        }
                        resolve({
                            stdout,
                            runtime: executionTimeC,
                            memory: usedMemory,
                        });
                        // console.log('b: ', stdout);
                    });
                });
            };
            const processTestcase = async (index, maxLength, code, numParams, testcases, language) => {
                console.log(index, maxLength);
                if (index >= maxLength) {
                    // Kết thúc khi đã xử lý hết các testcase
                    return;
                }

                const newCode = await supportConvertCode(code, numParams, testcases[index], language);
                fs.writeFileSync(`test${index}.cpp`, newCode);
                const scriptPath = `./test${index}.cpp`;
                const buildPath = `output${index}`;

                try {
                    const stdout = await executeCommand(`g++ ${scriptPath} -o ${buildPath} && ./${buildPath}`);
                    console.log(stdout);
                    const result = {
                        result:
                            String(JSON.parse(responseTestCase[index].output)) === String(JSON.parse(stdout.stdout)),
                        output: stdout.stdout,
                        runtime: stdout.runtime,
                        memory: stdout.memory,
                    };
                    fs.unlink(scriptPath, (unlinkError) => {
                        if (unlinkError) {
                            console.error(`Error deleting ${scriptPath}: ${unlinkError.message}`);
                            return;
                        }
                        console.log(`Deleted ${scriptPath}`);

                        fs.unlink(buildPath, (unlinkBuildError) => {
                            if (unlinkBuildError) {
                                console.error(`Error deleting ${buildPath}: ${unlinkBuildError.message}`);
                                return;
                            }
                            console.log(`Deleted ${buildPath}`);
                        });
                    });
                    finalResult.push(result);
                    console.log(`Output: ${stdout}`);

                    // Tiếp tục xử lý testcase tiếp theo
                    await processTestcase(index + 1, maxLength, code, numParams, testcases, language);
                } catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            };
            console.log(testcases);
            await processTestcase(0, testcases.length, code, numParams, testcases, language);
        } else if (language === 'python') {
            for (var i = 0; i < testcases.length; i++) {
                const newCode = await supportConvertCode(code, numParams, testcases[i], language);
                fs.writeFileSync('test.py', newCode);
                let options = {
                    mode: 'text',
                    pythonOptions: ['-u'],
                    // args: testcases[i],
                };
                let result;
                // const startTime = new Date();
                const startTime = process.hrtime();

                await PythonShell.run('test.py', options).then((messages) => {
                    // Runtime - Memory
                    const endTime = process.hrtime(startTime);
                    const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Thời gian thực thi (ms)
                    // console.log('Thời gian thực thi:', executionTime, 'ms');

                    const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Bộ nhớ đã sử dụng (MB)
                    // console.log('Bộ nhớ đã sử dụng:', usedMemory, 'MB');

                    // results is an array consisting of messages collected during execution
                    result = {
                        result: String(JSON.parse(responseTestCase[i].output)) === String(JSON.parse(messages[0])),
                        output: messages[0],
                        runtime: executionTime,
                        memory: usedMemory,
                    };
                    finalResult.push(result);
                });
            }
        }
        console.log(finalResult);
        return res.status(200).json({
            message: 'Successfully',
            body: finalResult,
        });
    }

    async runMoreTestcases(req, res, next) {
        const language = req.params.language;
        const { code } = req.body;
        var testcases = [];
        var numParams;

        const responseTestCase = await getTestcaseByProblemID(req.params.problem_id);

        responseTestCase.forEach((testcase) => {
            var inputs = testcase.input.split(' ');
            numParams = inputs.length;
            testcases.push(inputs);
        });

        // fs.writeFileSync('test.py', code);

        // console.log(testcases);

        let finalResult = [];
        for (var i = 0; i < testcases.length; i++) {
            // console.log('---------------------------------');
            var newCode2 = await supportConvertCode(code, numParams, testcases[i], language);
            // console.log(newCode2);
            fs.writeFileSync('test.py', newCode2);
            let options = {
                mode: 'text',
                pythonOptions: ['-u'],
                // args: testcases[i],
            };
            let result;
            // const startTime = new Date();
            const startTime = process.hrtime();

            await PythonShell.run('test.py', options).then((messages) => {
                // Runtime - Memory
                const endTime = process.hrtime(startTime);
                const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Thời gian thực thi (ms)
                // console.log('Thời gian thực thi:', executionTime, 'ms');

                const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Bộ nhớ đã sử dụng (MB)
                // console.log('Bộ nhớ đã sử dụng:', usedMemory, 'MB');

                // results is an array consisting of messages collected during execution
                result = {
                    result: String(JSON.parse(responseTestCase[i].output)) === String(JSON.parse(messages[0])),
                    output: messages[0],
                    runtime: executionTime,
                    memory: usedMemory,
                };
                finalResult.push(result);
            });
        }
        console.log(finalResult);
        return res.status(200).json({
            message: 'Successfully',
            body: finalResult,
        });
    }

    async getAllProblems(req, res, next) {
        const limit = parseInt(req.params.limit);
        const offset = parseInt(req.params.offset);
        const userId = parseInt(req.params.user_id);
        console.log(req.params);

        try {
            const count_query = `SELECT COUNT(*) FROM problems`;
            const count_response = await pool.query(count_query);
            if (offset > count_response.rows[0].count) throw 'Offset is too big!';

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

    async getProblemsForFilter(req, res) {
        const userId = req.params.user_id;
        const level = req.params.level;
        const status = req.params.status;
        const search = req.params.search;
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
            const { reason, title, description, languages, level_id, solutions, problem_languages, testcases } =
                req.body;

            const addProblem = await pool.query(
                'INSERT INTO problems (title, description, solution, likes, dislikes, level_id) VALUES ($1, $2, $3, $4, $5, $6)',
                [title, description, solutions, 0, 0, level_id],
            );

            const currentProblem = await pool.query(
                'SELECT * FROM problems WHERE title = $1 AND description = $2 AND solution = $3 AND level_id = $4',
                [title, description, solutions, level_id],
            );
            // console.log('a');
            console.log(currentProblem.rows[currentProblem.rows.length - 1]);

            // Testcases
            for (let i = 0; i < testcases.length; i++) {
                await pool.query(
                    'INSERT INTO testcases (problem_id, "input", "output", memory, runtime) VALUES ($1, $2, $3, $4, $5)',
                    [
                        currentProblem.rows[currentProblem.rows.length - 1].id,
                        testcases[i].input,
                        testcases[i].output,
                        0,
                        0,
                    ],
                );
            }

            // problem_languages
            for (let i = 0; i < problem_languages.length; i++) {
                await pool.query(
                    'INSERT INTO problem_languages (problem_id, language_id, initial_code, solution_code, full_code) VALUES ($1, $2, $3, $4, $5)',
                    [
                        currentProblem.rows[currentProblem.rows.length - 1].id,
                        problem_languages[i].language_id,
                        problem_languages[i].initialCode,
                        problem_languages[i].solutionCode,
                        problem_languages[i].fullCode,
                    ],
                );
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async runCodeWithJobe(req, res, next) {
        const { problem_id, language } = req.params;
        const { code } = req.body;
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
        };

        const responseTestCase = await getTestcaseByProblemID(problem_id);
        // console.log("Response test cases", responseTestCase);
        var finalResult = [];

        for (var i = 0; i < responseTestCase.length; i++) {
            const testcase = responseTestCase[i];
            console.log('run test case', responseTestCase.indexOf(testcase));
            const inputs = testcase.input.split(' ');
            const numParams = inputs.length;
            const newCode = await supportConvertCode(code, numParams, inputs, language);
            // console.log(newCode);

            const payload = JSON.stringify({
                run_spec: {
                    language_id: language === 'python' ? 'python3' : 'cpp',
                    sourcecode: newCode,
                },
            });

            const { run_id, outcome, cmpinfo, stdout, stderr } = await axios
                .post(`${process.env.LOCAL_JOBE_API}/runs`, payload, { headers })
                .then((res) => res.data)
                .catch((err) => console.log(err));

            const success =
                parseInt(outcome) === 15 &&
                !stderr &&
                String(JSON.parse(testcase.output)) === String(JSON.parse(stdout));

            const result_obj = {
                testcase: i,
                success: success,
                output: stdout,
                error: stderr,
                runtime: 0,
                memory: 0,
                run_id: run_id,
                cmpinfo: cmpinfo,
            };

            finalResult.push(result_obj);

            // if test case fails, terminate
            if (!success && i >= 3) {
                break;
            }
        }

        return res.status(200).json({
            message: 'Successfully',
            body: finalResult,
        });
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
