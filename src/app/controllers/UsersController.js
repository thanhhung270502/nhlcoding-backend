const pool = require('../../config/db');
const { encode } = require('../helper/user');
const jwt = require('jsonwebtoken');

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
            const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
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
            const { email, password, name, provider, role, avatar } = req.body;
            var newPassword = encode(password);
            console.log(typeof newPassword);
            const response = await pool.query(
                'INSERT INTO users (email, password, name, provider, role, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
                [email, newPassword, name, provider, role, avatar],
            );

            const getUser = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [
                email,
                newPassword,
            ]);

            console.log('abc', getUser);

            const payload = getUser.rows[0].id;
            const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });

            const currentUser = {
                id: getUser.rows[0].id,
                role: getUser.rows[0].role,
                name: getUser.rows[0].name,
                avatar: getUser.rows[0].avatar,
            };

            return res.status(200).json({
                message: 'User created successfully',
                body: {
                    accessToken,
                    user: currentUser,
                },
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new UsersController();
