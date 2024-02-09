const express = require("express");
const router = express.Router(); 
const ProductManager = require("../dao/db/productManager");
const productManager = new ProductManager();

router.get("/", async (req, res) => {
    try {
        const productos = await productManager.getProducts();
        // Convertir cada producto a un objeto plano
        const productosObj = productos.map(producto => producto.toObject());
        res.render("index", {
            productos: productosObj
        });
    } catch (error) {
        console.error("Error al obtener productos", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
});

router.get("/realtimeproducts", async (req, res) => {
    try {
        res.render("realtimeproducts");
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
});

module.exports = router;