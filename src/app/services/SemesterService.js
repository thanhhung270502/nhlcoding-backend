const pool = require('../../config/db');

class SemesterService {
    // [GET]
    async index(req, res) {
        try {
            const response = await pool.query('SELECT * FROM semesters');
            return res.status(200).json(response.rows);
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [POST]
    async create(req, res) {
        try {
            const { name, start_date, end_date } = req.body;

            if (!name || !start_date || !end_date) {
                return res.status(400).json({
                    code: 400,
                    message: 'Invalid parameters',
                });
            }

            // Check existing semesters
            var getSemester = await pool.query(`SELECT * FROM semesters WHERE "name" = $1`, [name]);

            if (getSemester.rows.length > 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'Existing semesters',
                });
            }

            const response = await pool.query(
                `INSERT INTO semesters ("name", start_date, end_date) VALUES ($1, $2, $3)`,
                [name, start_date, end_date],
            );

            getSemester = await pool.query(`SELECT * FROM semesters WHERE "name" = $1`, [name]);

            return res.status(201).json({
                code: 201,
                message: 'Created semester successfully',
                body: getSemester.rows[0],
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [PUT]
    async update(req, res) {
        try {
            let { name, start_date, end_date } = req.body;
            const id = parseInt(req.params.slug);

            const getSemester = await pool.query(`SELECT * FROM semesters WHERE id = $1`, [id]);

            if (getSemester.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Semester not found',
                });

            if (!name) name = getSemester.rows[0].name;
            if (!start_date) start_date = getSemester.rows[0].start_date;
            if (!end_date) end_date = getSemester.rows[0].end_date;

            const query = `
                UPDATE semesters 
                SET "name" = $1, start_date = $2, end_date = $3 
                WHERE id = $4
            `;
            const values = [name, start_date, end_date, getSemester.rows[0].id];

            const response = await pool.query(query, values);

            return res.status(200).json({
                code: 200,
                message: 'Update semester successfully',
                body: { name, start_date, end_date },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [DELETE]
    async delete(req, res) {
        try {
            const id = parseInt(req.params.slug);

            const getSemester = await pool.query(`SELECT * FROM semesters WHERE id = $1`, [id]);

            if (getSemester.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Semester not found',
                });

            const query = `DELETE FROM semesters WHERE id = $1`;
            const response = await pool.query(query, [id]);

            return res.status(200).json({
                code: 200,
                message: 'Semester deleted successfully',
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SemesterService();
