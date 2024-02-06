const Product = require('./models/productModel');

class ProductManagerMongo {
    async addProduct(productData) {
        try {
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }
    // Más métodos CRUD aquí...
}

module.exports = ProductManagerMongo;
