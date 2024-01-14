const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

class AuthController {
    async create_or_update(req, res) {
        if (req.user) {
            try {
                // Flow: 0 - create, 1 - get
                var flow = -1;
                var index = -1;
                const getUser = await pool.query('SELECT * FROM users WHERE email = $1', [req.user._json.email]);
                if (getUser.rows.length === 0) {
                    flow = 0;
                } else {
                    for (let i = 0; i < getUser.rows.length; i++) {
                        if (getUser.rows[i].provider === 'google') {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                        flow = 0;
                    } else {
                        flow = 1;
                    }
                }
                if (flow === 0) {
                    const addUser = await pool.query(
                        'INSERT INTO users (email, password, name, provider, role, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
                        [req.user._json.email, '', req.user._json.name, req.user.provider, 0, req.user._json.picture],
                    );

                    const getCurrentUser = await pool.query('SELECT * FROM users WHERE email = $1', [
                        req.user._json.email,
                    ]);
                    for (let i = 0; i < getCurrentUser.rows.length; i++) {
                        if (getCurrentUser.rows[i].provider === 'google') index = i;
                    }
                    const payload = getCurrentUser.rows[index].id;
                    const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });
                    const currentUser = {
                        id: getCurrentUser.rows[index].id,
                        role: getCurrentUser.rows[index].role,
                        name: getCurrentUser.rows[index].name,
                        avatar: getCurrentUser.rows[index].avatar,
                    };
                    return res.status(200).json({
                        error: false,
                        message: 'Successfully Logged In',
                        body: {
                            accessToken,
                            user: currentUser,
                        },
                    });
                } else if (flow === 1) {
                    const payload = getUser.rows[0].id;
                    const accessToken = jwt.sign({ payload }, 'jwtSecretKey', { expiresIn: 3000 });
                    const currentUser = {
                        id: getUser.rows[index].id,
                        role: getUser.rows[index].role,
                        name: getUser.rows[index].name,
                        avatar: getUser.rows[index].avatar,
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
