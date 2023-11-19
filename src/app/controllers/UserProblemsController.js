const pool = require('../../config/db')

class UserProblemsController {
    async insertUserProblem(req, res, next) {
        const { user_id, problem_id } = req.params
        try {
            const query = 'INSERT INTO user_problems(problem_id, user_id) VALUES ($1, $2)';
            
            const response = await pool.query(query, [problem_id, user_id])
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

module.exports = new UserProblemsController()