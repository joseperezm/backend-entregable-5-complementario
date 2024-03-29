const express = require("express");
const router = express.Router();

const CartManagerFs = require("../dao/fs/cartManager-fs.js")
const cartManagerFs = new CartManagerFs("../dao/fs/carts.json");

const CartManager = require("../dao/db/cartManager.js");
const cartManager = new CartManager();

router.post("/carts", async (req, res) => {
    try {
        const cart = await cartManager.createCart();
        res.status(201).json({ cid: cart._id, message: "Carrito creado correctamente" });
    } catch (error) {
        console.error("Error al crear el carrito...", error);
        res.status(500).json({ error: "Error del servidor" });
    }
});

router.get("/carts/:cid", async (req, res) => {
    try {
        const cart = await cartManager.getCart(req.params.cid);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: "Carrito no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el carrito por ID...", error);
        res.status(500).json({ error: "Error del servidor" });
    }
});

router.post("/carts/:cid/product/:pid", async (req, res) => {
    try {
        const success = await cartManager.addToCart(req.params.cid, req.params.pid);
        if (success) {
            res.json({ message: "Producto agregado al carrito correctamente" });
        } else {
            res.status(404).json({ message: "Carrito o producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al agregar producto al carrito...", error);
        res.status(500).json({ message: "Error del servidor" });
    }
});

router.delete("/carts/:cid", async (req, res) => {
    try {
        const success = await cartManager.deleteCart(req.params.cid);
        if (success) {
            res.json({ message: "Carrito eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Carrito eliminado correctamente" });
        }
    } catch (error) {
        console.error("Error al eliminar el carrito...", error);
        res.status(500).json({ error: "Error del servidor" });
    }
});

router.delete("/carts/:cid/product/:pid", async (req, res) => {
    try {
        const success = await cartManager.deleteProductFromCart(req.params.cid, req.params.pid);
        if (success) {
            res.json({ message: "Producto eliminado del carrito correctamente" });
        } else {
            res.status(404).json({ message: "Carrito o producto no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar producto del carrito...", error);
        res.status(500).json({ error: "Error del servidor" });
    }
});

module.exports = router;