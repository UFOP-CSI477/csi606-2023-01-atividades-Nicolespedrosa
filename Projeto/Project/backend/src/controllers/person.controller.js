const Pessoa = require("../models/person.model");

const checkIfPessoaExists = async (userId) => {
  let isPessoa;
  try {
    isPessoa = await Pessoa.find({ user: userId });
  } catch (err) {
    throw new Error(err);
  }
  return isPessoa.length >= 1;
};

const createPessoa = async (req, res) => {
  try {
    const userId = req.userData._id;
    const checkPessoa = await checkIfPessoaExists(userId);
    if (checkPessoa.error) {
      return res.status(400).json({ message: checkPessoa.message });
    }

    const pessoaData = {
      ...req.body,
      user: userId,
    };

    const novaPessoa = new Pessoa(pessoaData);
    await novaPessoa.save();

    res
      .status(201)
      .json({ message: "Nova pessoa criada com sucesso", novaPessoa });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const getPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPessoaById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const pessoa = await Pessoa.findOne({ user: userId });
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePessoa = async (req, res) => {
  try {
    const userId = req.userData._id; // ID do usuário autenticado
    const pessoaId = req.params.id; // ID da pessoa a ser deletada

    const pessoa = await Pessoa.findOneAndDelete({
      _id: pessoaId,
      user: userId,
    });
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    res.status(200).json({ message: "Pessoa excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPessoa,
  getPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa,
};
