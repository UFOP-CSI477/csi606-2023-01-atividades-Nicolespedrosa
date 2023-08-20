const Cart = require("../models/cart.model");

// Método responsável por criar um novo carrinho para o usuário autenticado
const createCart = async (req, res) => {
  try {
    const { _id: userId } = req.userData; // ID do usuário autenticado

    const cart = await Cart.create({ user: userId });

    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar carrinho", err });
  }
};

// Método responsável por adicionar um item ao carrinho
const addItemToCart = async (req, res) => {
  try {
    const { _id: userId } = req.userData; // ID do usuário autenticado
    const { bookId, quantity } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $addToSet: { items: { book: bookId, quantity } } },
      { new: true }
    );

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar item ao carrinho", err });
  }
};

// Método responsável por remover um item do carrinho
const removeItemFromCart = async (req, res) => {
  try {
    const { _id: userId } = req.userData; // ID do usuário autenticado
    const { itemId } = req.params;

    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { _id: itemId } } },
      { new: true }
    );

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Erro ao remover item do carrinho", err });
  }
};

// Método responsável por atualizar a quantidade de um item no carrinho
const updateCartItemQuantity = async (req, res) => {
  try {
    const { _id: userId } = req.userData; // ID do usuário autenticado
    const { itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { user: userId, "items._id": itemId },
      { $set: { "items.$.quantity": quantity } },
      { new: true }
    );

    res.json(cart);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar quantidade do item no carrinho", err });
  }
};

// Método responsável por buscar o carrinho do usuário autenticado
const getUserCart = async (req, res) => {
  try {
    const { _id: userId } = req.userData; // ID do usuário autenticado

    const cart = await Cart.findOne({ user: userId }).populate("items.book");

    if (!cart) {
      return res.status(404).json({ error: "Carrinho não encontrado" });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar carrinho do usuário", err });
  }
};

module.exports = {
  createCart,
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  getUserCart,
};
