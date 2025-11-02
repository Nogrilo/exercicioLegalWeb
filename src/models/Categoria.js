class Categoria{
    _nome = ""
    
    _descricao = ""
    getNome() {
        return this._nome
    }
    setNome(nome_) {
        this._nome = nome_
    }
    getDescricao() {
        return this._descricao
    }
    setDescricao(descricao_) {
        this._descricao = descricao_
    }
    constructor(){

    }

}
module.exports = Categoria