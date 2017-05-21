
//initialize express with below 2 steps
var express = require('express');
var app = express();
//install path as "npm install path --save" --> after setup ejs
var path = require('path');

// //see whether data.js works or not. When testing, comment out view enjine
// var dataFile = require('./data.js');
// console.log(dataFile.dataObject.beverage.name);
// console.log(dataFile.sayHello());
//comment out above and change because changed way of export as json & modulce
var dataFile = require('./data.json');
//comment out below after testing json file with above 'data.json' and remove comment out about view enjine, and add dataFile as dataVariable
// console.log(dataFile.beverage.name);


//view engine setup
app.set('vieq', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup data
   // move the data to data.js after setup dataVariable
//test for the data works properly or not
// console.log(data);

//hello world expample form express.js on google//
app.get('/', function(req, res) {
     //send index.js as a view with "render"
  //res.send('Hello World');
    //to path the data from index.js
  //res.render('index');
  res.render('index', { dataVariable: dataFile });
})
//[Final] to see whether localhost:3000/json shows all the data with using postman
app.get('/json', function (req, res) {
  res.json(dataFile)
})
//////////////////////////////////////////////////////////////////////////////////

app.listen(3000, function (){
  console.log('Beverage app listening on port 3000 !')
})
//////////////////////////////////////////////////
