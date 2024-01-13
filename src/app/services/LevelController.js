const pool = require('../../config/db');

class LevelController {
    async index(req, res, next) {
        try {
            const response = await pool.query('SELECT * FROM levels');
            return res.status(200).json(response.rows);
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
    async show(req, res, next) {
        const { level_id } = req.params;
        console.log(level_id);
        try {
            const query = 'SELECT * FROM levels WHERE id = $1 ';
            const response = await pool.query(query, [level_id]);
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

module.exports = new LevelController();
