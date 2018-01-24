const keys = require('../config/keys');
const Product = require('../models/Product');
const bodyParser = require('body-parser');
const https = require('https');
const request = require('request');
const fetch = require('whatwg-fetch');


module.exports = app => {
  
  // add products
  app.post('/api/addproduct', async (req, res) => {
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      category: req.body.category,
      upc: req.body.upc,
      image: req.body.image,
      brand: req.body.brand
    });
    
    await newProduct.save();
    
  });
  
  // grabbing all products in database for products index
  app.get('/api/fetchproducts', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  });
  
  app.get('/api/barcodesearch', async (req, res) => {
    var product = await Product.find(req.query);
    
    
    if(product.length < 1) {
      
      var opts = {
        hostname: 'api.upcitemdb.com',
        path: '/prod/trial/lookup',
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
          
        }
      }
      
      
      var request = https.request(opts, function(response) {
        response.on('data', function(data) {
          res.send(data.toString());
        })
        
      })
      request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
      })
      console.log(req.query.upc)
      request.write('{ "upc": ${req.query.upc} }')
      // other requests
      
      return request.end()
      
    };
    res.send(product);
    
  });
};

 
