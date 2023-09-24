const { Pool } = require('pg');

const pool = new Pool({
    user: 'kane',
    host: 'localhost',
    password: 'password',
    database: 'kane',
    port: 5432,
});

module.exports = pool;
