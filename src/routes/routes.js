const express   = require("express")
const router    = express.Router();

const FilmeDAO  = require("../DAO/FilmeDAO");
const GeneroDAO = require("../DAO/GeneroDAO");
const Genero = require("../models/Genero");

router.post('/filmes/criar',        FilmeDAO.criar)
router.get('/filmes/listar',        FilmeDAO.listar)
router.post('/filmes/alterar/:id',  FilmeDAO.alterarPorId)
router.post('/filmes/deletar/:id',  FilmeDAO.deletar)

router.post('/generos/criar',       Genero.criar)
router.get('/generos/listar',       GeneroDAO.listar)
router.post('/generos/alterar/:id', GeneroDAO.alterarPorId)
router.post('/generos/deletar/:id', GeneroDAO.deletar)

module.exports = router