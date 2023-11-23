const pool = require('../../config/db');

class Problem_languagesController {
    async getByProblemIDLanguageID(req, res, next) {
        const { problem_id, language_id } = req.params;
        try {
            const query = 'SELECT * FROM problem_languages WHERE language_id = $1 AND problem_id = $2';
            const response = await pool.query(query, [language_id, problem_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    code: 200,
                    message: 'Found problem_languages successfully',
                    body: response.rows[0],
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
    async getByProblemID(req, res, next) {
        const { problem_id } = req.params;
        try {
            const query =
                'SELECT * FROM problem_languages pl join "languages" l ON l.id = pl.language_id WHERE problem_id = $1';
            const response = await pool.query(query, [problem_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    code: 200,
                    message: 'Found problem_languages successfully',
                    body: response.rows,
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async index(req, res, next) {
        try {
            const response = await pool.query('SELECT * FROM problem_languages');
            return res.status(200).json(response.rows);
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new Problem_languagesController();
