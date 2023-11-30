const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

class SessionsController {
    // [POST] /
    async create(req, res) {
        try {
            const { email, password } = req.body;
            const query = 'SELECT * FROM users WHERE email = $1';
            const response = await pool.query(query, [email]);

            if (response.rows.length > 0) {
                console.log(response.rows[0]);
                const payload = response.rows[0].id;
                const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });
                const currentUser = {
                    id: response.rows[0].id,
                    role: response.rows[0].role,
                    name: response.rows[0].name,
                    avatar: response.rows[0].avatar,
                };

                return res.status(200).json({
                    message: 'Login successfully completed',
                    code: 200,
                    body: {
                        accessToken,
                        user: currentUser,
                    },
                });
            } else {
                return res.status(401).json({
                    message: 'Account not found',
                    code: 401,
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new SessionsController();
