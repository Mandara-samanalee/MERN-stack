const express = require('express'); //import express
const app = express(); //here app is the instance of express
const cors = require('cors'); //import cors
const controller = require('./controller'); //import controller.js

/* use necessary middlewares */
app.use(cors()); //use cors as the middleware

//this middleware is used to parse the incoming request with JSON payloads(encode data)
app.use(
    express.urlencoded({
        extended: true //if false, you can't encode "nested object"
    })
);

app.use(express.json()); //this middleware is used to convert the data in the incoming request to JSON format



/* form rest APIs for the methods in controller.js */
app.get('/users', (req, res) => { //here we haven't request only response
    controller.getUsers((req, res, next) => { //calls getUsers method in controller.js
        res.send(); //return response
    });
    
});


app.post('/createuser', (req, res) => {
    controller.createUser(req.body, (res, next) => { 
      res.send();  
    });
});


app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback); //use callback to know which user is updated
    });
});


app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback); //use callback to know which user is deleted 
    });
});

module.exports = app; //export app to server.js