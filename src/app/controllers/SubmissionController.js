const fs = require('fs');
const { PythonShell } = require('python-shell');
// import fs from 'fs';
// import { PythonShell } from 'python-shell';

class SubmissionController {
    runCode(req, res, next) {
        const language = req.params.language;
        const { code } = req.body;

        fs.writeFileSync('test.py', code);

        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: [1, 2, 3],
        };

        PythonShell.run('test.py', options).then((messages) => {
            // results is an array consisting of messages collected during execution
            console.log('results: %j', messages);
        });

        return res.status(200).json({
            message: 'Successfully',
        });
    }
}
module.exports = new SubmissionController();
