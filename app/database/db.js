const mysql = require("mysql2")
const config = require("../module/config.json").db

module.exports = mysql.createPool({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    multipleStatements: true
})