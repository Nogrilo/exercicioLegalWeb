class Livro{
    _nome = ""
    
    _isbn = ""
    
    _categoria = ""
    getNome() {
        return this._nome
    }
    setNome(nome_) {
        this._nome = nome_
    }
    getIsbn() {
        return this._isbn
    }
    setIsbn(isbn_) {
        this._isbn = isbn_
    }
    getCategoria() {
        return this._categoria
    }
    setCategoria(categoria_) {
        this._categoria = categoria_
    }

}
module.exports = Livro