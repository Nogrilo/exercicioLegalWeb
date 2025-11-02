const express = require('express');

const Filme = require('./src/models/Filme.js')
const FilmeDAO = require('./src/DAO/FilmeDAO.js')

/*
const Categoria = require('./src/models/Categoria.js');
const CategoriaDAO = require('./src/DAO/CategoriaDAO.js');
*/

const app = express();
//const categoriaRoutes = require('./src/routes/routes.js');

app.use(express.json()); // <-- tem que vir antes das rotas!
app.use('/api', categoriaRoutes);

const PORT = 3000;
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
