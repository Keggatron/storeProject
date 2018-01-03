const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require("body-parser");
const Product = require('./models/Product');
require('./routes/productRoutes')(app);

mongoose.connect(keys.mongoURI, {UseMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The store app server has started");
});