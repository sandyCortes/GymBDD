'use strict';

const express = require('express')
const http = require('http')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())

app.use('/user', require('./Services/routes'))

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})
/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'TESE',
    password : 'Pi=3.1416',
    database : 'gimnasioV4'
  });
   

  app.get('/user', (request, response) => {
    connection.connect();
   
    connection.query('select * from DeportistaSeguimiento', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
        
    });
    
    connection.end();
  })*/