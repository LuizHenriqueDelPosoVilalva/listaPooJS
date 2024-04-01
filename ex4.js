class ItemBiblioteca {
    constructor() {
        if(this.constructor === ItemBiblioteca) {
            throw new Error("Essa classe não pode ser instanciada")
        }
    }

    get obterInformacao() {
        throw new Error(`Esse metodo deve ser implementado`)
    }
}

class Livro extends ItemBiblioteca {
    constructor(autor, titulo) {
        super(autor, autor)
        this.autor = autor
        this.titulo = titulo
    }

    get obterInformacao(){
        return `Autor do livro: ${this.autor}, titulo do livro: ${this.titulo}`
    }
}

class DVD extends ItemBiblioteca {
    constructor(capacidade, camadas, nome) {
        super(capacidade, camadas, nome)
        this.capacidade = capacidade
        this.camadas = camadas 
        this.nome = nome
    }

    get obterInformacao() {
        return `Detalhes do DVD, nome: ${this.nome}, capacidade: ${this.capacidade}, camadas: ${this.camadas} `
    }
}

const livro1 = new Livro ('J.R.R.Tolkien', 'Senhor dos Aneis')
console.log(livro1.obterInformacao)

const livro2 = new Livro ('Zé', 'Primavera Silenciosa')
console.log(livro2.obterInformacao)

const dvd1 = new DVD('1,120 MB', 10, 'O Hobbit')
console.log(dvd1.obterInformacao)

const dvd2 = new DVD('0.724 MB', 2, 'A coisa')
console.log(dvd2.obterInformacao)
