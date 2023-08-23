const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");
const auth = require("../middlewares/auth");

// ==> Rota responsável por criar um novo carrinho para o usuário autenticado: (POST): localhost:3000/api/cart
router.post("/cart", auth, cartController.createCart);

// ==> Rota responsável por adicionar um item ao carrinho: (POST): localhost:3000/api/cart/add
router.post("/cart/add", auth, cartController.addItemToCart);

// ==> Rota responsável por remover um item do carrinho: (DELETE): localhost:3000/api/cart/:itemId
router.delete("/cart/:itemId", auth, cartController.removeItemFromCart);

// ==> Rota responsável por atualizar a quantidade de um item no carrinho: (PUT): localhost:3000/api/cart/:itemId
router.put("/cart/:itemId", auth, cartController.updateCartItemQuantity);

// ==> Rota responsável por buscar o carrinho do usuário autenticado: (GET): localhost:3000/api/cart
router.get("/cart", auth, cartController.getUserCart);

module.exports = router;
