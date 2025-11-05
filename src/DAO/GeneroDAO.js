const DataTypes     = require ('sequelize') // Importar o sequelize, para vincular com o banco de dados
const Genero        = require ("../models/Genero") // Importar a classe de Genero
const db            = require ('../database/conexao'); // Importar o arquivo de conexao com o banco de dados

// Criar a tabela Generos no banco de dados
const GeneroModel = db.define("Generos",{
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
});

// Garantir que a tabela seja criada no bd
GeneroModel.sync()

class GeneroDAO{
    static getGeneroModel() {
        return GeneroModel
    }
    static async criar(req, res){
            var objetoGenero            = new Genero()
            objetoGenero.setNome        (req.body.nome)
            objetoGenero.setDescricao   (req.body.descricao)
            const dados={
                nome:           objetoGenero.getNome(),
                descricao:      objetoGenero.getDescricao()
            }
            await GeneroModel.create(dados)// Inserir o registro no banco de dados
            res.status(201).json(dados)

    }

    static async alterarPorId(req, res){
        const id = req.params.id
        const dadosAntigos          = await GeneroModel.findByPk(id)// Retonar o registro no bd com base no ID
        const objetoGenero          = new Genero()
        objetoGenero.setNome        (req.body.nome)
        objetoGenero.setDescricao   (req.body.descricao)
        const dadosAtualizados = {
            nome:           objetoGenero.getNome(),
            descricao:      objetoGenero.getDescricao()
        }
        await dadosAntigos.update(dadosAtualizados)
        res.status(200).json(dadosAtualizados)
    }

    static async deletar(req, res){
        const id = req.params.id
        const dados = await GeneroModel.findByPk(id); // retorna o registro da tabela Generos com base no parâmetro id (Chave primária)
        if (dados!=null){
            await dados.destroy() // DELETE CATEGORIA WHERE ID = ''""
            res.status(204).json({message:"Genero Excluido"})
        }
    }

    static async listar (req, res){
        try{
        const dados = await GeneroModel.findAll(); // SELECT * FROM Generos
        res.json(dados)
        }
        catch(Error){

        }
    }
}
module.exports = GeneroDAO