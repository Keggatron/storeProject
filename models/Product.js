const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema ({
  name: String,
  description: String,
  quantity: Number,
  price: String,
  category: String, 
  upc: { type: String, require: true, unique: true },
  images: [ 
    String
    ],
  brand: String
});

module.exports = mongoose.model('products', productSchema);