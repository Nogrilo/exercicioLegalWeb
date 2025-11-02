const DataTypes = require ('sequelize') // import do sequelize
const Livro = require ("../models/Livro")
const db = require ('../database/conexao'); // import da classe de conexão com o banco de dados
const CategoriaDAO = require('./CategoriaDAO');

// Cria uma tabela chamada Categoria no banco Biblioteca
const LivroModel = db.define("Livro",{
    nome: {
        type: DataTypes.STRING
    },
    isbn: {
        type: DataTypes.STRING
    },
    categoriaId:{ //Definir um atributo categoriaId
        type: DataTypes.INTEGER, //tipo inteiro
        references: { // define a referência do atributo
            modedel : 'Categoria', // Define como referência para o atributo um id de um registro de Categoria
            key: 'id',
            allowNull: false
        }
    }
});
LivroModel.belongsTo(CategoriaDAO.getCategoriaModel(),{
    foreignKey: 'categoriaId',
    as:'categoria'
})


//Assegura que a tabela seja criada caso ela não exista no BD
LivroModel.sync()
class LivroDAO{
    
    static async criar(req, res){
            var objetoLivro = new Livro()
            objetoLivro.setNome(req.body.nome)//armazena os valores do body em um objeto da classe Livro
            objetoLivro.setIsbn(req.body.isbn)//armazena os valores do body em um objeto da classe Livro
            objetoLivro.setCategoria(req.body.categoriaId)//armazena os valores do body em um objeto da classe Livro
            const dados={
                nome: objetoLivro.getNome(),
                isbn: objetoLivro.getIsbn(),
                categoriaId: objetoLivro.getCategoria()
            }//montar o objeto dados que vai ser persistido (inserido) no banco
            await LivroModel.create(dados)// Inserir o registro no banco de dados
            res.status(201).json(dados)

    }
    static async listar (req, res){
        try{
        const dados = await LivroModel.findAll(); // SELECT * FROM Livros
        res.json(dados)
        }
        catch(Error){

        }
    }
}
module.exports = LivroDAO