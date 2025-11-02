const DataTypes = require ('sequelize') // import do sequelize
const Categoria = require ("../models/Categoria")
const db = require ('../database/conexao') // import da classe de conexão com o banco de dados

// Cria uma tabela chamada Categoria no banco Biblioteca
const CategoriaModel = db.define("Categoria",{
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
});

//Assegura que a tabela seja criada caso ela não exista no BD
CategoriaModel.sync()

class CategoriaDAO{
    static getCategoriaModel(){
        return CategoriaModel
    }
    static async criar(req, res){
        var objetoCategoria = new Categoria()
        objetoCategoria.setNome(req.body.nome)
        objetoCategoria.setDescricao(req.body.descricao)
        const dados = {
            nome: objetoCategoria.getNome(),
            descricao: objetoCategoria.getDescricao()

        }
        await CategoriaModel.create(dados)
        res.status(201).json(dados);
    }
    static async alterarPorId(req, res){
        const id = req.params.id
        const dadosAntigos = await CategoriaModel.findByPk(id)// retornar um registro da tabela com base no id
        const objetoCategoria= new Categoria()
        objetoCategoria.setNome(req.body.nome)
        objetoCategoria.setDescricao(req.body.descricao)
        const dadosAtualizados = {
            nome: objetoCategoria.getNome(),
            descricao: objetoCategoria.getDescricao()

        }
        await dadosAntigos.update(dadosAtualizados)
        res.status(200).json(dadosAtualizados)
    }
    static async listar (req, res){
        try{
        const dados = await CategoriaModel.findAll(); // SELECT * FROM Categoria
        res.json(dados)
        }
        catch(Error){

        }
    }
    static async delete(req, res){
        const id = req.params.id
        const dados = await CategoriaModel.findByPk(id); // retorna o registro da tabela categoria  com base no parâmetro id (Chave primária)
        if (dados!=null){
            await dados.destroy() // DELETE CATEGORIA WHERE ID = ''""
            res.status(204).json({message:"excluído"})
        }
    }
}
module.exports = CategoriaDAO
