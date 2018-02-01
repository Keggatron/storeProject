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
//   upc: "885909950805",
//   images: [ 
//     "http://img1.r10.io/PIC/112231913/0/1/250/112231913.jpg"
//     ],
//   brand: "Apple" 
//   },
//     {
//       name : "Toshiba Portege Z830-s8301 13.3\" 128gb Ssd Intel Core I5-2557m 1.7ghz 4gb Win7",
//       description : "For those seeking supreme portability and styling, plus the benefits of the latest technologies and performance, there's our Portege family. These models feature ultra-thin, super-light, durable and reliable laptops with amazingly long battery life - ideal for mobile professionals and executives - which help them go through their entire day effortlessly and worry-free. No-compromise performanceDon't let the sleek and light design of Portege laptops leave you thinking they're light on power too. Unlike othe...",
//       quantity : 20, 
//       price : "249.99", 
//       category : "electronics", 
//       upc : "883974958450", 
//         images: [
//           "http://img1.r10.io/PIC/52275560/0/1/250/52275560.jpg"
//           ],
//       brand : "Toshiba" 
//     }  
//   )

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The store app server has started");
});