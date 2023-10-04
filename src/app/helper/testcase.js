const pool = require('../../config/db');

const getTestcaseByProblemID = async (problem_id) => {
    try {
        const query = 'SELECT * FROM testcases WHERE problem_id = $1';
        const response = await pool.query(query, [problem_id]);
        if (response.rows.length > 0) {
            return response.rows;
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
        return [err];
    }
};

module.exports = { getTestcaseByProblemID };
