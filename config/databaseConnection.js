var mysql = require('mysql');

var connection = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'news'
    });
}

module.exports = function() {
    return connection;
}