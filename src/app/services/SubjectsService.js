const pool = require('../../config/db');

class SubjectsService {
    // [GET]
    async index(req, res) {
        try {
            const response = await pool.query('SELECT * FROM subjects');
            return res.status(200).json(response.rows);
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [POST]
    async create(req, res) {
        try {
            const { name, short_name } = req.body;

            if (!name || !short_name) {
                return res.status(400).json({
                    code: 400,
                    message: 'Invalid parameters',
                });
            }

            // Check existing subjects
            var getSubject = await pool.query(`SELECT * FROM subjects WHERE "name" = $1 AND short_name = $2`, [
                name,
                short_name,
            ]);

            if (getSubject.rows.length > 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'Existing subjects',
                });
            }

            const response = await pool.query(`INSERT INTO subjects ("name", short_name) VALUES ($1, $2)`, [
                name,
                short_name,
            ]);

            getSubject = await pool.query(`SELECT * FROM subjects WHERE "name" = $1 AND short_name = $2`, [
                name,
                short_name,
            ]);

            return res.status(201).json({
                code: 201,
                message: 'Created semester successfully',
                body: getSubject.rows[0],
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [PUT]
    async update(req, res) {
        try {
            let { name, short_name } = req.body;
            const id = parseInt(req.params.slug);

            const getSubject = await pool.query(`SELECT * FROM subjects WHERE id = $1`, [id]);

            if (getSubject.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Subject not found',
                });

            if (!name) name = getSubject.rows[0].name;
            if (!short_name) short_name = getSubject.rows[0].short_name;

            const query = `
                UPDATE subjects 
                SET "name" = $1, short_name = $2
                WHERE id = $3
            `;
            const values = [name, short_name, getSubject.rows[0].id];

            const response = await pool.query(query, values);

            return res.status(200).json({
                code: 200,
                message: 'Update semester successfully',
                body: { name, short_name },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [DELETE]
    async delete(req, res) {
        try {
            const id = parseInt(req.params.slug);

            const getSubject = await pool.query(`SELECT * FROM subjects WHERE id = $1`, [id]);

            if (getSubject.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Subject not found',
                });

            const query = `DELETE FROM subjects WHERE id = $1`;
            const response = await pool.query(query, [id]);

            return res.status(200).json({
                code: 200,
                message: 'Subject deleted successfully',
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SubjectsService();
