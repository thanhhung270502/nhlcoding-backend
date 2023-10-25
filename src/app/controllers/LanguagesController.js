const pool = require('../../config/db');

class LanguagesController {
    async show(req, res, next) {
        const { language_id } = req.params;
        console.log(language_id);
        try {
            const query = 'SELECT * FROM language WHERE id = $1 ';
            const response = await pool.query(query, [language_id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    code: 200,
                    message: 'Found language successfully',
                    body: response.rows[0],
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new LanguagesController();