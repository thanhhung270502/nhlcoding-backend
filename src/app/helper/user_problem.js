const pool = require('../../config/db');

const getUserProblemByIds = async (user_id, problem_id) => {
    try {
        const query = `SELECT id FROM user_problems WHERE user_id = $1 AND problem_id = $2`;
        const response = await pool.query(query, [parseInt(user_id), parseInt(problem_id)]);
        if (response.rows.length > 0) {
            return parseInt(response.rows[0].id);
        } else return null;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    getUserProblemByIds,
};