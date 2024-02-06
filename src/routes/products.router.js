const express = require('express');
const router = express.Router();
const ProductManagerMongo = require('../dao/productManagerMongo');

// Instanciar el manager de MongoDB para productos
const productManager = new ProductManagerMongo();

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await productManager.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Más rutas CRUD aquí...

module.exports = router;
