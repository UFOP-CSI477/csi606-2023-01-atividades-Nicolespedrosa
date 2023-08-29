const mongoose = require("mongoose");

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
    nome: { type: String },
    rua: { type: String },
    numero: { type: Number },
    complemento: { type: String },
    documento: { type: String },
    cep: { type: String },
    
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    collection: "pessoas",
  }
);

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = Pessoa;
