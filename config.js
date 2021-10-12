'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        dbconn: DB_CONNECTION,
        dbhost: DB_HOST,
        dbport: DB_PORT,
        dbdatabase: DB_DATABASE,
        dbusername: DB_USERNAME,
        dbpassword: DB_PASSWORD
    }
}