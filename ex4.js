class ItemBiblioteca {
    set obterInformacao(detalhes) {
         this.detalhes =  detalhes
    }

    get obterInformacao() {
        return this.detalhes
    }
}

class Livro extends ItemBiblioteca {
    
    constructor(autor, titulo) {
        super(autor, autor)
        this.autor = autor
        this.titulo = titulo
    }
}

class DVD extends ItemBiblioteca {

    constructor(capacidade, camadas, nome) {
        super(capacidade, camadas, nome)
        this.capacidade = capacidade
        this.camadas = camadas 
        this.nome = nome
    }
}

const itemBiblioteca = new ItemBiblioteca()
const livro1 = new Livro ('J.R.R.Tolkien', 'Senhor dos Aneis')
itemBiblioteca.obterInformacao = livro1
console.log(itemBiblioteca.obterInformacao)

const livro2 = new Livro ('Zé', 'Primavera Silenciosa')
itemBiblioteca.obterInformacao = livro2
console.log(itemBiblioteca.obterInformacao)

const dvd1 = new DVD('1,120 MB', 10, 'O Hobbit')
itemBiblioteca.obterInformacao = dvd1
console.log(itemBiblioteca.obterInformacao)

const dvd2 = new DVD('0.724 MB', 2, 'A coisa')
itemBiblioteca.obterInformacao = dvd2
console.log(itemBiblioteca.obterInformacao)

