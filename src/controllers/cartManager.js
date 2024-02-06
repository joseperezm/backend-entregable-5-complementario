const Cart = require('../dao/models/cartModel');

class CartManager {
    async createCart() {
        try {
            const cart = new Cart();
            await cart.save();
            return cart;
        } catch (error) {
            throw error;
        }
    }

    async getCartById(cartId) {
        try {
            const cart = await Cart.findById(cartId);
            return cart;
        } catch (error) {
            throw error;
        }
    }

    // Más métodos CRUD aquí...
}

module.exports = new CartManager();
