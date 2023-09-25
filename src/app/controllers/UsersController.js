const pool = require('../../config/db');

class UsersController {
    // [GET] /
    async index(req, res, next) {
        try {
            const query = 'SELECT * FROM users';
            const response = await pool.query(query);
            return res.status(200).json(response.rows);
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async show(req, res, next) {
        try {
            const id = parseInt(req.params.slug);
            const response = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
            if (response.rows.length > 0) {
                return res.status(200).json({
                    message: 'Found user successfully',
                    code: 200,
                    body: {
                        user: response.rows[0],
                    },
                });
            } else {
                return res.status(404).json({
                    message: 'User not found',
                    code: 404,
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }

    async create(req, res) {
        try {
            const { email, password, name, age, role } = req.body;
            const response = await pool.query(
                'INSERT INTO users (email, password, name, age, role) VALUES ($1, $2, $3, $4, $5)',
                [email, password, name, age, role],
            );

            return res.status(200).json({
                message: 'User created successfully',
                body: {
                    user: {
                        email,
                        password,
                        name,
                        age,
                        role,
                    },
                },
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new UsersController();
