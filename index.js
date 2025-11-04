const express       = require('express'); // Importar o express

const Filme         = require('./src/models/Filme.js') // Importar classe Filme
const FilmeDAO      = require('./src/DAO/FilmeDAO.js') // Importar classe FilmeDAO

const Genero        = require('./src/models/Genero.js') // Importar a classe de Genero
const GeneroDAO     = require('./src/DAO/GeneroDAO.js') // Importar a classe de GeneroDAO

const app           = express();
const filmeRoutes   = require('./src/routes/routes.js') // Rota

app.use(express.json());
app.use('/api', filmeRoutes);

const PORT = 3000;
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
