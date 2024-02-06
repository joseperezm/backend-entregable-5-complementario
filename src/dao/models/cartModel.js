const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    status: { type: String, default: 'active' }, // active, completed, etc.
});

module.exports = mongoose.model('Cart', cartSchema);
