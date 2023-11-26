const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

class AuthController {
    async create_or_update(req, res) {
        if (req.user) {
            try {
                const getUser = await pool.query('SELECT * FROM users WHERE email = $1', [req.user._json.email]);
                if (getUser.rows.length === 0) {
                    const addUser = await pool.query(
                        'INSERT INTO users (email, password, name, provider, role, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
                        [req.user._json.email, '', req.user._json.name, req.user.provider, 0, req.user._json.picture],
                    );

                    const getCurrentUser = await pool.query('SELECT * FROM users WHERE email = $1', [
                        req.user._json.email,
                    ]);
                    const payload = getCurrentUser.rows[0].id;
                    const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });
                    const currentUser = {
                        id: getCurrentUser.rows[0].id,
                        role: getCurrentUser.rows[0].role,
                        name: getCurrentUser.rows[0].name,
                        avatar: getCurrentUser.rows[0].avatar,
                    };
                    return res.status(200).json({
                        error: false,
                        message: 'Successfully Logged In',
                        body: {
                            accessToken,
                            user: currentUser,
                        },
                    });
                } else {
                    const payload = getUser.rows[0].id;
                    const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });
                    const currentUser = {
                        id: getUser.rows[0].id,
                        role: getUser.rows[0].role,
                        name: getUser.rows[0].name,
                        avatar: getUser.rows[0].avatar,
                    };
                    return res.status(200).json({
                        error: false,
                        message: 'Successfully Logged In',
                        body: {
                            accessToken,
                            user: currentUser,
                        },
                    });
                }
            } catch (err) {
                console.log(err);
                return res.status(500).json('Internal Server Error');
            }
        } else {
            return res.status(403).json({ error: true, message: 'Not Authorized' });
        }
    }

    async verifyJwt(req, res, next) {
        const token = req.headers['access-token'];
        if (!token) {
            return res.status(200).json({
                message: 'We need token please provide it for next time',
                login: false,
            });
        } else {
            jwt.verify(token, 'jwtSecretKey', (err, decoded) => {
                if (err) {
                    res.json({
                        message: 'Not authenticated. Please try again',
                        login: false,
                    });
                } else {
                    req.userID = decoded.id;
                    next();
                }
            });
        }
    }
}

module.exports = new AuthController();
