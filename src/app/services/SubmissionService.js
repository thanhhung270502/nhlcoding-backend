const pool = require('../../config/db');
const { insertUserProblemIfNotExisted } = require('../helper/user_problem');

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
            const query = `SELECT * FROM submissions WHERE user_id = $1 and problem_id = $2`;
            const response = await pool.query(query, [user_id, problem_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found submissions successfully',
                    code: 200,
                    body: response.rows,
                });
            } else {
                return res.status(404).json({
                    message: 'Submissions not found',
                    code: 404,
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }

    async create(req, res, next) {
        const { language_id, user_id, problem_id, runtime, memory, status, datetime, code, score, wrong_testcase_ids } = req.body;

        try {
            await insertUserProblemIfNotExisted(user_id, problem_id);
            const query = `
                INSERT INTO submissions (language_id, user_id, problem_id, runtime, memory, status, datetime, code, score)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING id
            `;
            const response = await pool.query(query, [language_id, user_id, problem_id, runtime, memory, status, datetime, code, score]);

            if (response.rows.length > 0) {
                const submission_id = response.rows[0].id;
                if (wrong_testcase_ids && wrong_testcase_ids.length > 0) {
                    // Insert wrong testcases to testcase_submissions
                    for (const testcase_id of wrong_testcase_ids) {
                        // TODO: Must check if testcase_id belongs to the corresponding problem_id
                        const query = 'INSERT INTO testcase_submissions (testcase_id, submission_id) VALUES ($1, $2)';
                        const values = [parseInt(testcase_id), parseInt(submission_id)];

                        await pool.query(query, values);
                    }
                }
                return res.status(201).json({
                    message: 'Submission created successfully',
                    code: 201,
                    id: submission_id,
                });
            } else {
                return res.status(422).json({
                    message: "Submission created failed",
                    code: 422,
                });
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
            await pool.query(query, [id]);

            return res.status(204).json({
                message: 'Delete submissions successfully',
                code: 204,
                body: { id: id },
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SubmissionController();