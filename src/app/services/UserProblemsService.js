const pool = require('../../config/db')

class UserProblemsService {
    async insertUserProblem(req, res, next) {
        const { user_id, problem_id } = req.params;
        const { status } = req.body;

        try {
            const query = 'INSERT INTO user_problems(problem_id, user_id, status) VALUES ($1, $2, $3)';

            await pool.query(query, [problem_id, user_id, status]);
            return res.status(200).json({
                message: 'UserProblem modified successfully',
                code: 200
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json('Internal Server Error')
        }
    }
}

module.exports = new UserProblemsService()