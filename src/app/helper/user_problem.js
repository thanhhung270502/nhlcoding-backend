const pool = require('../../config/db');

// IMPORTANT: insert user_problems if not having yet
const insertUserProblemIfNotExisted = async (user_id, problem_id) => {
    try {
        const query = `SELECT id FROM user_problems WHERE user_id = $1 AND problem_id = $2`;
        var response = await pool.query(query, [parseInt(user_id), parseInt(problem_id)]);

        // If row does not exist, insert a new one
        if (response.rows.length == 0) {
            const insertQuery = `
                INSERT INTO user_problems (user_id, problem_id)
                VALUES ($1, $2)
                RETURNING id
            `;
            response = await pool.query(insertQuery, [parseInt(user_id), parseInt(problem_id)]);
        }

        return parseInt(response.rows[0].id);
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    insertUserProblemIfNotExisted,
};