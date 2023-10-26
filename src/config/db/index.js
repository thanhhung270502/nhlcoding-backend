const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'nhlcoding',
    password: 'password',
    database: 'nhlcoding',
    port: 5432,
});

module.exports = pool;
