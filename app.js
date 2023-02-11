const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();


const helplineNumbersRoutes = require('./routes/helplineNumbers');


const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const URI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.npfbgb4.mongodb.net/helplinehub?retryWrites=true&w=majority`;


// // // connect with database
mongoose.set('strictQuery', false);
// mongoose.connect(URI).then((res)=>{
//   console.log('connected with database')
// }).catch((err)=>{
//   console.log('Failed to connect with database')
// })



const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/helplineNumbers', helplineNumbersRoutes);


mongoose
  .connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => {
    console.log('connected with database', res)
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => {
    console.log(error);
  });



