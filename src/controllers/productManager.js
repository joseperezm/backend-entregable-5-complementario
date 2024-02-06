const Product = require('../dao/models/productModel');

class ProductManager {
    async addProduct(productData) {
        try {
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }

    async getProductById(productId) {
        try {
            const product = await Product.findById(productId);
            return product;
        } catch (error) {
            throw error;
        }
    }

    // Más métodos CRUD aquí...
}

module.exports = new ProductManager();
