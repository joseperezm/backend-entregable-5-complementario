const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  // Asumiendo que un carrito tiene una lista de IDs de productos
  status: { type: String, default: 'active' }, // Ejemplo de cómo podrías querer estructurarlo
  date: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;