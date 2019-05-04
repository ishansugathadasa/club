require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const rtsIndex = require('./routes/index.router');
//const uri = "mongodb+srv://user-1:<ucscprj_3>@somiru-restaurant-cluster-pkdq6.mongodb.net/test?retryWrites=true"

var app = express();
 
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
 
// start server
//app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

// replace the uri string with your connection string.


//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user-1:<grpprj_3>@somiru-restaurant-cluster-pkdq6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 // client.close();
});








// require('./config/config');
// require('./models/db');

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const rtsIndex = require('./routes/index.router');

// var app = express();
 
// // middleware
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', rtsIndex);
 
// // start server
// app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

