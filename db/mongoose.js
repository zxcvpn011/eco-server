const mongoose = require("mongoose");
const config = require("dotenv").config();

const mongoURI = process.env.DATABASE || 'mongodb://localhost:27017/test';

mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", (e) => {
  console.error(e);
});

connection.once("open", () => {
  console.log("connected to db");
});

exports.connection = connection














































// const { createHmac } = require('node:crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);
/*

mongoose.createConnection(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
  useFindAndModify: false 
}); 
let gfs; conn.once('open', () => { gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'uploads' }); console.log('MongoDB connected'); }); 
*/