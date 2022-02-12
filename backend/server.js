//Express framework
const express = require('express');
const app = express();

//To access the .env file
require('dotenv').config();

//Cross-origin resource sharing for tranfering data between front and backend
const cors = require('cors');

//MongoDB middleware for query drivers
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');

app.use(express.json());
app.use(cors());

//Connection strings for mongoose(To connect to mongoDB)
//Can be updated in .env file
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

//Connected to testDB for now
//Can switch to a different database by changing the .env file
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

app.use('/users',usersRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});

//ANOTHER TO CONNECT TO THE DATABASE
// const mongoUri = 'mongodb+srv://mongodb:password321@realmcluster.mvyvj.mongodb.net/findandplaydb?retryWrites=true&w=majority';
// mongoose.connect(mongoUri);

// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB instance');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('Error connecting to MongoDB', err);
// });