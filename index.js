const express       = require('express');

const Filme         = require('./src/models/Filme.js')
const FilmeDAO      = require('./src/DAO/FilmeDAO.js')

const app           = express();
const filmeRoutes   = require('./src/routes/routes.js')

app.use(express.json());
app.use('/api', filmeRoutes);

const PORT = 3000;
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
