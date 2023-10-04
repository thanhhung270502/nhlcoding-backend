const fs = require('fs');
const { PythonShell } = require('python-shell');
const process = require('process');
const pool = require('../../config/db');
const { getTestcaseByProblemID, isNumber, isArray, supportSubmitCode } = require('../helper/testcase');

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

        const response = await getTestcaseByProblemID(req.params.problem_id);

        const { code } = req.body;

        fs.writeFileSync('test.py', code);

        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: [1, 2],
        };

        let result;
        // const startTime = new Date();
        const startTime = process.hrtime();

        let expected = 3;

        await PythonShell.run('test.py', options).then((messages) => {
            // Runtime - Memory
            const endTime = process.hrtime(startTime);
            const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Thời gian thực thi (ms)
            console.log('Thời gian thực thi:', executionTime, 'ms');

            const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Bộ nhớ đã sử dụng (MB)
            console.log('Bộ nhớ đã sử dụng:', usedMemory, 'MB');

            // results is an array consisting of messages collected during execution
            result = messages[0];
            result = {
                result: expected === parseInt(messages[0]),
                output: messages[0],
                runtime: executionTime,
                memory: usedMemory,
            };
            console.log('results: %j', messages[0]);
        });

        return res.status(200).json({
            message: 'Successfully',
            body: result,
        });
    }

    async runMoreTestcases(req, res, next) {
        const language = req.params.language;

        const responseTestCase = await getTestcaseByProblemID(req.params.problem_id);

        var testcases = [];
        console.log(responseTestCase);

        var numParams;

        responseTestCase.forEach((testcase) => {
            var inputs = testcase.input.split(' ');
            numParams = inputs.length;
            // for (var i = 0; i < inputs.length; i++) {
            //     inputs[i] = JSON.parse(inputs[i]);
            // }
            testcases.push(inputs);
        });

        const { code } = req.body;

        let finalResult = [];
        for (var i = 0; i < testcases.length; i++) {
            console.log('---------------------------------');
            console.log(testcases[i]);
            var newCode2 = supportSubmitCode(code, numParams, testcases[i]);
            fs.writeFileSync('test.py', newCode2);
            console.log(testcases[i]);
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
                console.log('Thời gian thực thi:', executionTime, 'ms');

                const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024; // Bộ nhớ đã sử dụng (MB)
                console.log('Bộ nhớ đã sử dụng:', usedMemory, 'MB');

                // results is an array consisting of messages collected during execution
                result = {
                    result: '',
                    output: messages[0],
                    runtime: executionTime,
                    memory: usedMemory,
                };
                console.log('results: %j', messages);
                console.log(result);
                finalResult.push(result);
            });
        }

        return res.status(200).json({
            message: 'Successfully',
            body: 'finalResult',
        });
    }
}
module.exports = new ProblemsController();
