//Express framework
const express = require('express');
const app = express();

const port = 3000;

//To access the .env file
require('dotenv').config();

//Cross-origin resource sharing for tranfering data between front and backend
const cors = require('cors');

//Node.js-based Object Data Modeling (ODM) library for MongoDB
//MongoDB middleware for query drivers
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);

//Connection string for mongoose (to connect to MongoDB)
//Can be updated in .env file
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

//Connecting to testDB for now
//Can switch to a different database by changing the URI inside the .env file
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});