const mongoose = require("mongoose");

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
<<<<<<< HEAD
    nome: { type: String },
    rua: { type: String },
    numero: { type: Number },
    complemento: { type: String },
    documento: { type: String },
    cep: { type: String },
=======
    nome: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    complemento: { type: String, required: true },
    documento: { type: String, required: true },
    cep: { type: String, required: true },
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
    
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
<<<<<<< HEAD
=======
      required: true,
>>>>>>> cf66af24a5dba8ec05f08a7487f8735907b49216
    },
  },
  {
    timestamps: true,
    collection: "pessoas",
  }
);

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = Pessoa;
