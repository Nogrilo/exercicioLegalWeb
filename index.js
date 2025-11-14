const express       = require('express'); // Importar o express

const FilmeDAO      = require('./src/DAO/FilmeDAO.js') // Importar classe FilmeDAO

const GeneroDAO     = require('./src/DAO/GeneroDAO.js') // Importar a classe de GeneroDAO

const app           = express();
const filmeRoutes   = require('./src/routes/routes.js') // Rota

app.use(express.json());
app.use('/api', filmeRoutes);


const PORT = 3000;
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// teste para rodar o front

// handlebars
app.set("view engine", "handlebars")
app.use("/", filmeRoutes)

const path          = require('path')
const basePath      = path.join(__dirname, 'templates')
app.use(express.static(basePath))

app.use( // ler dados do formulario
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

app.get('/api/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/filmes', (req, res) => {
    res.sendFile(`${basePath}/filme.html`)
})

app.get('/genero', (req, res) => {
    res.sendFile(`${basePath}/genero.html`)
    console.log(req.body);
})

app.post("/genero.html", (req, res) => {
  const { nome, descricao } = req.body;
  GeneroDAO.criar(req, res)
});

app.post("/filme.html", (req, res) => {
    const { titulo, sinopse, generoID, duracao, diretor} = req.body;
    FilmeDAO.criar(req, res)
})