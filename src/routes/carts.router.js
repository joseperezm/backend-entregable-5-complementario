const express = require('express');
const router = express.Router();
const CartManagerMongo = require('../dao/cartManagerMongo');

// Instanciar el manager de MongoDB para carts
const cartManager = new CartManagerMongo();

// Ruta para obtener todos los carritos
router.get('/', async (req, res) => {
  try {
    const carts = await cartManager.getAllCarts();
    res.json(carts);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Más rutas CRUD aquí...

module.exports = router;
