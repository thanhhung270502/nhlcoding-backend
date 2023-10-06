const fs = require('fs');
const { PythonShell } = require('python-shell');
const process = require('process');
const pool = require('../../config/db');
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
        const processTestcase = async (i, maxLength, code, numParams, testcases, language) => {
            if (i > maxLength) return;
            const newCode = await supportConvertCode(code, numParams, testcases[i], language);
            fs.writeFileSync(`test${i}.cpp`, newCode);
            const scriptPath = `./test${i}.cpp`;
            const buildPath = `output${i}`;
            // let result;

            await exec(`g++ ${scriptPath} -o ${buildPath} && ./${buildPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Error: ${stderr}`);
                    return;
                }
                // result = {
                //     output: stdout,
                // };
                // finalResult.push(result);
                console.log(`Output: ${stdout}`);
            });
            processTestcase(i + 1, maxLength, code, numParams, testcases, language);
        };

        if (language === 'cpp') {
            // await processTestcase(0, 2, code, numParams, testcases, language);
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
                if (index > maxLength) {
                    // Kết thúc khi đã xử lý hết các testcase
                    return;
                }

                const newCode = await supportConvertCode(code, numParams, testcases[index], language);
                fs.writeFileSync(`test${index}.cpp`, newCode);
                const scriptPath = `./test${index}.cpp`;
                const buildPath = `output${index}`;

                try {
                    const stdout = await executeCommand(`g++ ${scriptPath} -o ${buildPath} && ./${buildPath}`);
                    const result = {
                        result:
                            String(JSON.parse(responseTestCase[index].output)) === String(JSON.parse(stdout.stdout)),
                        output: stdout.stdout,
                        runtime: stdout.runtime,
                        memory: stdout.memory,
                    };
                    finalResult.push(result);
                    console.log(`Output: ${stdout}`);

                    // Tiếp tục xử lý testcase tiếp theo
                    await processTestcase(index + 1, maxLength, code, numParams, testcases, language);
                } catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            };
            console.log(testcases);
            await processTestcase(0, 2, code, numParams, testcases, language);
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
}
module.exports = new ProblemsController();
