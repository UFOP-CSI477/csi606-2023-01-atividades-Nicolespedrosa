const User = require("../models/user.model");


const checkIfEmailExists = async (email) => {
  let isUser;
  try {
    isUser = await User.find({ email });
  } catch (err) {
    throw new Error(err);
  }
  return isUser.length >= 1;
};

const saveUserAndGenerateAuthToken = async (userData) => {
  const newUser = new User(userData);
  const user = await newUser.save();
  const token = await newUser.generateAuthToken();
  return { user, token };
};

const registerNewUser = async (req, res) => {
  try {
    const checkEmail = await checkIfEmailExists(req.body.email);
    if (checkEmail.error) {
      return res.status(400).json({ message: checkEmail.message });
    }
    if (await checkIfEmailExists(req.body.email)) {
      return res
        .status(409)
        .json({ message: "Sorry! This email is already registered " });
    }

    const { user, token } = await saveUserAndGenerateAuthToken(req.body);
    res
      .status(201)
      .json({ message: "New user registered successfully", token });
  } catch (err) {
    res.status(400).json({ err });
  }
};
// ==> Método responsável por realizar um novo login 'User':
const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

// ==> Método responsável por retornar um determinado 'User'
const returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.userData._id; // ID do usuário autenticado
    const user = await User.findById(userId); // Encontra o usuário a ser deletado

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Remove todos os documentos relacionados ao usuário
    await Adocao.deleteMany({ user: userId });
    await Doacao.deleteMany({ user: userId });
    await Pet.deleteMany({ user: userId });
    await Pessoa.deleteMany({ user: userId });
    await User.deleteOne({ _id: userId });

    return res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao deletar o usuário", error });
  }
};

module.exports = {
  checkIfEmailExists,
  saveUserAndGenerateAuthToken,
  registerNewUser,
  loginUser,
  returnUserProfile,
  deleteUser,
};