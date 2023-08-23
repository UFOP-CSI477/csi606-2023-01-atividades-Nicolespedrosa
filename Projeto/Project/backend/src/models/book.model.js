const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    quantityInStock: { type: Number, required: true },
    purchasedBy: [{ type: Schema.Types.ObjectId, ref: "User" }], // Referência ao modelo User
  },
  {
    timestamps: true,
    collection: "books",
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
