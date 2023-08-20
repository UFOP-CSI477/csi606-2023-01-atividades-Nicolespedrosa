const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const auth = require("../middlewares/auth");

// ==> Rota responsável por criar um novo livro: (POST): localhost:3000/api/books
router.post("/books", auth, bookController.createBook);

// ==> Rota responsável por buscar todos os livros: (GET): localhost:3000/api/books
router.get("/books", auth, bookController.getAllBooks);

// ==> Rota responsável por buscar todos os livros: (GET): localhost:3000/api/books
router.get("/booksnoauth", bookController.getAllBooks);

// ==> Rota responsável por buscar livros por título: (GET): localhost:3000/api/books/search?title=termo
router.get("/books/search",  bookController.getBooksByTitle);

// ==> Rota responsável por buscar um livro pelo ID: (GET): localhost:3000/api/books/:id
router.get("/books/:id", auth, bookController.getBookById);

// ==> Rota responsável por comprar um livro pelo ID: (POST): localhost:3000/api/books/:id/purchase
router.post("/books/:id/purchase", auth, bookController.purchaseBook);

// ==> Rota responsável por deletar um livro pelo ID: (DELETE): localhost:3000/api/books/:id
router.delete("/books/:id", auth, bookController.deleteBook);

// ==> Rota responsável por atualizar um livro pelo ID: (PUT): localhost:3000/api/books/:id
router.put("/books/:id", auth, bookController.updateBook);

module.exports = router;
