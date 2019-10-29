'user strict';
var mysql = require('mysql2');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'TESE',
    password : 'Pi=3.1416',
    database : 'gimnasioV4'
  });

connection.connect(function(err) {
    if (err) {
        console.log('Error: ',err)
        throw err;
    }else {
        console.log('DB Connected')
    }
});

module.exports = connection;