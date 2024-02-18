const pool = require('../../config/db');

class SemesterService {
    async index(req, res) {
        try {
            const response = await pool.query('SELECT * FROM semesters');
            return res.status(200).json(response.rows);
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SemesterService();
