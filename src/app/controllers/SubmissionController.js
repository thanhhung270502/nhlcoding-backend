const pool = require('../../config/db');

class SubmissionController {
    async show(req, res, next) {
        const { user_id, problem_id } = req.params;

        try {
            const query = `SELECT * FROM submissions WHERE user_problems_id IN (
                SELECT id FROM user_problems WHERE user_id = $1 AND problem_id = $2)`;
            const response = await pool.query(query, [parseInt(user_id), parseInt(problem_id)]);
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
}

module.exports = new SubmissionController();