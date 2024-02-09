const mongoose = require('mongoose');
const Cart = require('../models/carts-mongoose'); 
const Product = require('../models/products-mongoose'); 

class CartManager {
    constructor() {}

    // Crear un nuevo carrito
    async createCart() {
        try {
            const cart = new Cart();
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error creando el carrito:', error);
            throw error;
        }
    }

    // Añadir producto al carrito por IDs
    async addToCart(cartId, productId) {
        try {
            const cart = await Cart.findById(cartId);
            const product = await Product.findById(productId); // Opcional, verificar si el producto existe
            if (!cart || !product) {
                throw new Error('Carrito o producto no encontrado');
            }
            cart.products.push(productId);
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error añadiendo producto al carrito:', error);
            throw error;
        }
    }

    // Obtener el carrito y sus productos
    async getCart(cartId) {
        try {
            const cart = await Cart.findById(cartId).populate('products');
            if (!cart) {
                throw new Error('Carrito no encontrado');
            }
            return cart;
        } catch (error) {
            console.error('Error obteniendo el carrito:', error);
            throw error;
        }
    }

    // Eliminar un carrito por ID
    async deleteCart(cartId) {
        try {
            await Cart.findByIdAndDelete(cartId);
        } catch (error) {
            console.error('Error eliminando el carrito:', error);
            throw error;
        }
    }
}

module.exports = CartManager;