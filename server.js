const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'docker',
  database: 'docker'
});

connection.connect();

app.get('/products', function(req, res) {
   
   connection.query('SELECT * FROM products', function (error, results) {
      if (error) { 
         throw error
   };

   res.send(results.map(item => ({ name: item.name, price: item.price })));
  });

});

app.listen(3000, function() {
    console.log('Listening on port 9001');
})
