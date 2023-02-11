const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config();
// const hello = require('./routes/hello')


const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const URI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.npfbgb4.mongodb.net/?retryWrites=true&w=majority`;


// // connect with database
mongoose.set('strictQuery', false);
mongoose.connect(URI).then((res)=>{
  console.log('connected with database')
}).catch((err)=>{
  console.log('Failed to connect with database')
})





// // const db = mongoose.connection;
// // db.once('open', () => {
// //  db.db.admin().listDatabases((err, result) => {
// //    if (err) {
// //      console.log("Error getting database list:", err);
// //    } else {
// //      console.log("List of databases:", result.databases);
// //    }
// //  });
// // });




// // app.get('/',(req,res)=>{
//  //  res.send('Raushan')
//  // })
 
//  // app.use('/',hello)
 
 
 
 
// //  app = express();
// // const PORT = process.env.PORT ||5000
// // app.listen(PORT, ()=>{
// //  console.log('listingt on port','Raushan yadav')
// //  console.log(process.env.NAME)
// // })









// const connect = () => {
//     mongoose.connect(URI)
//         .then((res) => console.log(`mongodb connected`))
//         .catch((err) => {
//             console.log(`mongodb not connected`, err);
//         });
// }

// connect()


