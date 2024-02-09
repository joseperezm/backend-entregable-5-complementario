const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  status: Boolean,
  stock: Number,
  category: String,
  thumbnails: String,
  // id: mongoose.Schema.Types.ObjectId // No es necesario definirlo, Mongoose lo añade automáticamente
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
