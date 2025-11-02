class Filme{
    titulo = ""
    
    sinopse = ""

    genero = ""

    duracao = 0

    diretor = ""

    getTitulo() {
        return this.titulo
    }
    setTitulo(titulo) {
        this.titulo = titulo
    }
    getSinopse() {
        return this.sinopse
    }
    setSinopse(sinopse) {
        this.sinopse = sinopse
    }

    getGenero() {
        return this.genero
    }

    setGenero(genero) {
        this.genero = genero
    }

    getDuracao() {
        return this.duracao
    }

    setDuracao(duracao) {
        this.duracao = duracao
    }

    getDiretor() {
        return this.diretor
    }

    setDiretor(diretor) {
        this.diretor = diretor
    }
    constructor(){

    }

}
module.exports = Filme