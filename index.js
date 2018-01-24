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

// Product.create(
//   {
//   name: "Apple iPhone 6, Space Gray, 64 GB (T-Mobile)",
//   description: "iPhone 6 isn't just bigger - it's better...",
//   quantity: 15,
//   price: "$599",
//   category: "electronics", 
//   upc: 885909950805,
//   images: [ 
//     "http://img1.r10.io/PIC/112231913/0/1/250/112231913.jpg"
//     ],
//   brand: "Apple" 
//   }
//   )

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The store app server has started");
});