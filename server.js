//Specifing constanst for our app
// 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
// Handling Cross Post request
var allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// intercept OPTIONS method
if ('OPTIONS' == req.method) {
res.sendStatus(200);
} else {
next();
}
};

// Handling Any request through Express.js and Components of react .js
app.use(allowCrossDomain);

// Body parser is need for reading json objects 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Creating Connection to Database
const con = mysql.createConnection({
  host: "momproject.cjx455lgw86o.us-east-2.rds.amazonaws.com",
  user: "dbadmin",
  password: "MOMProject",
  database: "NewsOne"
  
});
//Connecting to our Database
con.connect((err) => {
  if (err) {
    throw err;
  }
 console.log("Connected to Database!");
 
});

// Query for gathering dataset from database 
// limit is 500 records can be changed in procedure
/*
con.query('CALL allInfo(0)', 
 function(err, results, fields) {
        console.log(err);
        console.log(results);
        connection.end();
    });
*/

// Specifing route for creating database 
app.get('/createdb',(req,res) =>{
let sql = 'CREATE DATABASE allMe';
con.query(sql, (err,result) =>{
  if(err) throw err;
  console.log(result);
  res.send('Database Created');
});
});
 
 // Gathering Url Information from database
 app.get('/getpost', (req,res) =>{
  let sql = 'SELECT * FROM URLS';
  let query = con.query(sql, (err,results) =>{
      if(err) throw err;
  res.send(results);
    });
  });

   app.get('/getnews', (req,res) =>{
  let sql = 'SELECT * FROM NEWS LIMIT 50';
  let query = con.query(sql, (err,results) =>{
      if(err) throw err;
  res.send(results);
    });
  });

   app.get('/searching', (req,res) =>{
    let filter = req.body;
    let sql = 'SELECT * FROM NEWS WHERE f_Fulltext IS LIKE %' + filter + '%';
    let query = con.query(sql, (err,results) =>{
      if(err) throw err;
  res.send(results);
  console.log(filter);
    });
   });

   app.post('/soon', (req,res) =>{
         let filter = req.body.mySearch;
         echo(filter);
           console.log(filter);
   });


// Launching our api (express.js)
app.listen(3005,() =>{
  console.log('Api started');
});