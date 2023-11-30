const pool = require('../../config/db');
const { getUserProblemByIds } = require('../helper/user_problem');

class SubmissionController {
    async showAll(req, res, next) {
        try {
            const query = `SELECT * FROM submissions`;
            const response = await pool.query(query);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found submissions successfully',
                    code: 200,
                    body: response.rows,
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }

    async show(req, res, next) {
        const { user_id, problem_id } = req.params;

        try {
            const user_problem_id = await getUserProblemByIds(user_id, problem_id);
            const query = `SELECT * FROM submissions WHERE user_problems_id = $1`;
            const response = await pool.query(query, [user_problem_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found submissions successfully',
                    code: 200,
                    body: response.rows,
                });
            } else {
                return res.status(200).json({
                    message: 'Cannot find submissions',
                    code: 200,
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }

    async create(req, res, next) {
        const { user_id, problem_id, status, datetime, language_id, runtime, code, wrong_testcase_id } = req.body;
        const user_problems_id = await getUserProblemByIds(user_id, problem_id);

        try {
            const query = `INSERT INTO submissions (user_problems_id, status, datetime, language_id, runtime, code, wrong_testcase_id)
                            VALUES ($1, $2, $3, $4, $5, $6, $7)
                            RETURNING *`;
            const response = await pool.query(query, [user_problems_id, status, datetime, language_id, runtime, code, wrong_testcase_id]);
            if (response.rows.length > 0) {
                return res.status(201).json({
                    message: 'Submission created successfully',
                    code: 201,
                    body: response.rows[0],
                });
            } else {
                return res.status(400).json('Cannot create submission');
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }

    async delete(req, res, next) {
        const id = parseInt(req.params.id);

        try {
            const query = `DELETE FROM submissions WHERE id = $1`;
            const response = await pool.query(query, [id]);

            return res.status(200).json({
                message: 'Delete submissions successfully',
                code: 200,
                body: { id: id },
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SubmissionController();