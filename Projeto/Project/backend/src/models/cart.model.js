const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [cartItemSchema],
  },
  {
    timestamps: true,
    collection: "carts",
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
