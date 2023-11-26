const pool = require('../../config/db')

const getProblemLanguageByProblemIdAndLanguageId = async (problem_id, language_id) => {
    try {
        const query = 'SELECT * FROM problem_languages WHERE problem_id = $1 AND language_id = $2'
        const response = await pool.query(query, [problem_id, language_id])
        if (response.rows.length > 0) {
            return response.rows[0]
        } else {
            return []
        }
    } catch (err) {
        console.log(err)
        reutrn [err]
    }
}

module.exports = {
    getProblemLanguageByProblemIdAndLanguageId
}