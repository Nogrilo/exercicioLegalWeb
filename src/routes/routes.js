const express = require("express")
const router = express.Router();

const CategoriaDAO = require("../DAO/CategoriaDAO");
const LivroDAO = require("../DAO/LivroDAO");

const FilmeDAO = require("../DAO/FilmeDAO");

router.post('/categorias', CategoriaDAO.criar)
router.get('/categorias', CategoriaDAO.listar)
router.post('/categorias/deletar/:id', CategoriaDAO.delete)
router.post('/categorias/alterar/:id', CategoriaDAO.alterarPorId)

router.post('/filmes/criar', FilmeDAO.criar)
router.get('/filmes/listar', FilmeDAO.listar)

module.exports = router