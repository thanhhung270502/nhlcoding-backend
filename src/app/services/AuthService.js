const pool = require('../../config/db');
const jwt = require('jsonwebtoken');

class AuthController {
    async create_or_update(req, res) {
        if (req.user) {
            console.log(req.user);
            try {
                // Flow: 0 - create, 1 - get
                var index = -1;
                const getUser = await pool.query('SELECT * FROM users WHERE email = $1 AND provider = $2', [
                    req.user._json.email,
                    req.user.provider,
                ]);

                if (getUser.rows.length === 0) {
                    await pool.query(
                        'INSERT INTO users (email, password, name, provider, role, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
                        [
                            req.user._json.email,
                            '',
                            req.user._json.name,
                            req.user.provider,
                            'normal',
                            req.user._json.picture,
                        ],
                    );

                    const getCurrentUser = await pool.query('SELECT * FROM users WHERE email = $1 AND provider = $2', [
                        req.user._json.email,
                        req.user.provider,
                    ]);

                    return res.status(201).json({
                        message: 'User created successfully',
                        code: 201,
                        body: {
                            id: getCurrentUser.rows[0].id,
                            role: getCurrentUser.rows[0].role,
                            name: getCurrentUser.rows[0].name,
                            email: getCurrentUser.rows[0].email,
                            avatar: getCurrentUser.rows[0].avatar,
                            accessToken: generateToken(getCurrentUser.rows[0].id, getCurrentUser.rows[0].role),
                        },
                    });
                } else {
                    return res.status(201).json({
                        id: getUser.rows[0].id,
                        role: getUser.rows[0].role,
                        name: getUser.rows[0].name,
                        avatar: getUser.rows[0].avatar,
                        email: getUser.rows[0].email,
                        accessToken: generateToken(getUser.rows[0].id, getUser.rows[0].role),
                    });
                }
            } catch (err) {
                console.log(err);
                return res.status(500).json('Internal Server Error');
            }
        } else {
            return res.status(403).json({ error: true, message: 'Not Authorized', code: 403 });
        }
    }

    async verifyJwt(req, res, next) {
        const token = req.headers['access-token'];
        if (!token) {
            return res.status(403).json({
                message: 'We need token please provide it for next time',
                code: 403,
                login: false,
            });
        } else {
            jwt.verify(token, 'jwtSecretKey', (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        message: 'Not authenticated. Please try again',
                        code: 401,
                        login: false,
                    });
                } else {
                    req.userID = decoded.id;
                    next();
                }
            });
        }
    }

    async checkRole(req, res) {
        const userRole = req.userRole;
        if (userRole === 'teacher') {
            return res.status(202).json({
                code: 202,
                message: 'You are a teacher',
                body: {
                    role: userRole,
                },
            });
        } else if (userRole === 'admin') {
            return res.status(202).json({
                code: 202,
                message: 'You are a administrator',
                body: {
                    role: userRole,
                },
            });
        } else if (userRole === 'student') {
            return res.status(202).json({
                code: 202,
                message: 'You are a student',
                body: {
                    role: userRole,
                },
            });
        } else {
            return res.status(202).json({
                code: 202,
                message: 'You are a normal person',
                body: {
                    role: userRole,
                },
            });
        }
    }
}

module.exports = new AuthController();
