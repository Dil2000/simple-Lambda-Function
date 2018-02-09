// index.js

const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/amazon', function(req,res){
	res.redirect('https://www.amazon.com/');
});

app.get('/test', function(req,res){
	res.json("Testing Json");
})

module.exports.handler = serverless(app);