const express   = require("express")
const router    = express.Router();

const FilmeDAO  = require("../DAO/FilmeDAO");

router.post('/filmes/criar',        FilmeDAO.criar)
router.get('/filmes/listar',        FilmeDAO.listar)
router.post('/filmes/alterar/:id',  FilmeDAO.alterarPorId)
router.post('/filmes/deletar/:id',  FilmeDAO.deletar)

module.exports = router