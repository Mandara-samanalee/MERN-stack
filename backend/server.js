const express = require('express'); //import express
const app = express(); //here app is the instance of express
const cors = require('cors'); //import cors
const router = require('./router') //import router

const port = 4000;
const host = '127.0.0.1'
const mongoose = require('mongoose'); //import mongoose
const dotenv = require('dotenv'); //import dotenv
dotenv.config();

app.use(cors());
app.use(express.json());

const dbURL = process.env.dbURL;

const connect = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Successfully connected to the Mongodb');
    } catch (error) {
        console.log('Error connecting to the Mongodb', error);
    }
};

connect();

//create server to run nodejs application
const server = app.listen(port, host, () => {
    console.log(`Express server listening to ${server.address().port}`);
});

app.use('/api', router); //use router in the app