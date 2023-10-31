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

class ProblemsController {
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

    async runCodeWithJobe(req, res) {
        const payload = req.body;
        const { language_id, sourcecode } = payload.run_spec;
        const header = {
            'Content-Type': 'application/json; charset=utf-8',
        };

        var testcases = [];
        var numParams;

        const responseTestCase = await getTestcaseByProblemID(req.params.problem_id);

        responseTestCase.forEach((testcase) => {
            var inputs = testcase.input.split(' ');
            numParams = inputs.length;
            testcases.push(inputs);
        });

        let finalResult = [];
        for (var i = 0; i < testcases.length; i++) {
            console.log('---------------------------------');
            var finalCode = await supportConvertCode(sourcecode, numParams, testcases[i], language_id);
            console.log(finalCode);

            const result = {
                runtime: 0,
                memory: 0,
            };

            axios.post('localhost/jobe/index.php/restapi/runs', payload, { header })
                .then(response => {
                    const { run_id, outcome, cmpinfo, stdout, stderr } = response.data;
                    result = {
                        result: String(JSON.parse(responseTestCase[i].output)) === String(JSON.parse(stdout)),
                        output: stdout,
                        error: stderr,
                        ...result,
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            finalResult.push(result);
        }
        console.log(finalResult);
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
            //     "sourcecode": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}" 
            //     } 
            // }

            const { language_id, sourcecode } = req.body.run_spec;

            if ((language_id != "cpp" && language_id != "python3") || !sourcecode) {
                return res.status(200).json({
                    code: 200,
                    message: 'Cannot run code with jobe',
                    // body: JSON.parse(stdout),
                });
            }

            const payload = JSON.stringify(req.body);
            const headers = {
                "Content-type": "application/json; charset-utf-8",
            }

            console.log(`${process.env.LOCAL_JOBE_API}/runs`);

            const body = await axios.post(`${process.env.LOCAL_JOBE_API}/runs`, req.body, { headers })
                .then(res => res.data)
                .catch(err => console.log(err.message));

            return res.status(200).json({
                code: 200,
                message: 'Run code with jobe successfully',
                body: body,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = new ProblemsController();
