const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/person.controller");
const auth = require("../middlewares/auth.js");

// ==> Rota responsável por Criar uma nova 'Pessoa': (POST): localhost:3000/api/pessoas
router.post("/pessoas", auth, pessoaController.createPessoa);

// ==> Rota responsável por Buscar todas as 'Pessoas': (GET): localhost:3000/api/pessoas
router.get("/pessoas", auth, pessoaController.getPessoas);

// ==> Rota responsável por Buscar uma 'Pessoa' por ID: (GET): localhost:3000/api/pessoas/:id
router.get("/pessoas/byUserId/:userId", auth, pessoaController.getPessoaById);

// ==> Rota responsável por Atualizar uma 'Pessoa' por ID: (PUT): localhost:3000/api/pessoas/:id
router.put("/pessoas/:id", auth, pessoaController.updatePessoa);

// ==> Rota responsável por Deletar uma 'Pessoa' por ID: (DELETE): localhost:3000/api/pessoas/:id
router.delete("/pessoas/:id", auth, pessoaController.deletePessoa);

module.exports = router;