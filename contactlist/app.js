
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors= require("cors");
var mongoose= require('mongoose');


var app = express();

const route=require('./route/routes');
mongoose.connect('mongodb://localhost:27017/contactlist',{ useUnifiedTopology: true, useNewUrlParser:true}  );
mongoose.connection.on('connected',()=>{
    console.log('connected to database @27017');
});
mongoose.connection.on('error',(err)=>{
    console.log('Error in database connection:'+err);
});


const port= 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api',route);
app.get('/',(req,res)=>{
    res.send('footbar');
});
app.listen(port,()=>{
    console.log('server started at port:',port);
});

