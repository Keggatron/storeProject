const keys = require('../config/keys');
const Product = require('../models/Product');
const bodyParser = require('body-parser');





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
};

 
