const Book = require("../models/book.model");

const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar o livro", err });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros", err });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livro", err });
  }
};

const getBooksByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros por título", err });
  }
};

const purchaseBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const userId = req.userData._id; // ID do usuário autenticado

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    // Adicionar o ID do usuário ao array purchasedBy
    book.purchasedBy.push(userId);
    await book.save();

    res.status(200).json({ message: "Livro comprado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao comprar livro", err });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findByIdAndDelete(bookId);
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.status(200).json({ message: "Livro deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar livro", err });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar livro", err });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  getBooksByTitle,
  purchaseBook,
  deleteBook,
  updateBook,
};
