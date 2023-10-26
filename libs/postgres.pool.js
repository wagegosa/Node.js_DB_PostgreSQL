const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.USER);
const PASS = encodeURIComponent(config.PASS);
const URI = `postgres:://${USER}:${PASS}:@${config.dbHost}:${config.dbPort}/${config.dbname}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;