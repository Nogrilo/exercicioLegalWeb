const DataTypes = require ('sequelize') // Importar o sequelize, para vincular com o banco de dados
const Filme     = require ("../models/Filme") // Importar a classe de Filme
const db        = require ('../database/conexao'); // Importar o arquivo de conexao com o banco de dados

// Criar a tabela Filmes no banco de dados
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

// Garantir que a tabela seja criada no bd
FilmeModel.sync()
class FilmeDAO{
    
    static async criar(req, res){
            var objetoFilme         = new Filme()
            objetoFilme.setTitulo   (req.body.titulo)
            objetoFilme.setSinopse  (req.body.sinopse)
            objetoFilme.setGenero   (req.body.genero)
            objetoFilme.setDuracao  (req.body.duracao)
            objetoFilme.setDiretor  (req.body.diretor)
            const dados={
                titulo:     objetoFilme.getTitulo(),
                sinopse:    objetoFilme.getSinopse(),
                genero:     objetoFilme.getGenero(),
                duracao:    objetoFilme.getDuracao(),
                diretor:    objetoFilme.getDiretor()
            }
            await FilmeModel.create(dados)// Inserir o registro no banco de dados
            res.status(201).json(dados)

    }

    static async alterarPorId(req, res){
        const id = req.params.id
        const dadosAntigos      = await FilmeModel.findByPk(id)// Retonar o registro no bd com base no ID
        const objetoFilme       = new Filme()
        objetoFilme.setTitulo   (req.body.titulo)
        objetoFilme.setSinopse  (req.body.sinopse)
        objetoFilme.setGenero   (req.body.genero)
        objetoFilme.setDuracao  (req.body.duracao)
        objetoFilme.setDiretor  (req.body.diretor)
        const dadosAtualizados = {
            titulo:     objetoFilme.getTitulo(),
                sinopse:    objetoFilme.getSinopse(),
                genero:     objetoFilme.getGenero(),
                duracao:    objetoFilme.getDuracao(),
                diretor:    objetoFilme.getDiretor()
        }
        await dadosAntigos.update(dadosAtualizados)
        res.status(200).json(dadosAtualizados)
    }

    static async deletar(req, res){
        const id = req.params.id
        const dados = await FilmeModel.findByPk(id); // retorna o registro da tabela filmes com base no parâmetro id (Chave primária)
        if (dados!=null){
            await dados.destroy() // DELETE CATEGORIA WHERE ID = ''""
            res.status(204).json({message:"excluído"})
        }
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