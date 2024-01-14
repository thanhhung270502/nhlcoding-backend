const pool = require('../../config/db');
const { sortById } = require('../../utils');

class TestcasesController {
    async index(req, res, next) {
        try {
            const response = await pool.query('SELECT * FROM testcases');
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

            // Default: only return the first 3 testcases as example
            const testcases = sortById(response.rows).slice(0, 3);

            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found testcases successfully',
                    code: 200,
                    body: {
                        testcases,
                    },
                });
            } else {
                return res.status(404).json({
                    message: 'No testcases found',
                    code: 404,
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}
module.exports = new TestcasesController();
