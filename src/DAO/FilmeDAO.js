const DataTypes = require ('sequelize') // import do sequelize
const Filme = require ("../models/Filme")
const db = require ('../database/conexao'); // import da classe de conexão com o banco de dados

// Cria uma tabela chamada Categoria no banco Biblioteca
const FilmeModel = db.define("Filmes",{
    titulo: {
        type: DataTypes.STRING
    },
    sinopse: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.STRING
    },
    duracao: {
        type: DataTypes.FLOAT
    },
    diretor: {
        type: DataTypes.STRING
    }
});
/*
FilmeModel.belongsTo(CategoriaDAO.getCategoriaModel(),{
    foreignKey: 'categoriaId',
    as:'categoria'
})
*/

//Assegura que a tabela seja criada caso ela não exista no BD
FilmeModel.sync()
class FilmeDAO{
    
    static async criar(req, res){
            var objetoFilme     = new Filme()
            objetoFilme.setTitulo   (req.body.titulo)
            objetoFilme.setSinopse  (req.body.sinopse)
            objetoFilme.setGenero   (req.body.genero)
            objetoFilme.setDuracao  (req.body.duracao)
            objetoFilme.setDiretor  (req.body.diretor)
            const dados={
                titulo:     objetoFilme.getTitulo(),
                sinopse:    objetoFilme.getSinopse(),
                genero:     objetoFilme.getSinopse(),
                duracao:    objetoFilme.getDuracao(),
                diretor:    objetoFilme.getDiretor()
            }
            await FilmeModel.create(dados)// Inserir o registro no banco de dados
            res.status(201).json(dados)

    }
    static async listar (req, res){
        try{
        const dados = await FilmeModel.findAll(); // SELECT * FROM Filmes
        res.json(dados)
        }
        catch(Error){

        }
    }
}
module.exports = FilmeDAO