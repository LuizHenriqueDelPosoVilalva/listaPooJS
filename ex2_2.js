class Livro {
    #titulo
    #autor
    #preco
    constructor(titulo, autor, preco) {
        this.#titulo = titulo
        this.#autor = autor
        this.#preco = preco
    }

    get informacoes() {
        return `Titulo: ${this.#titulo}, autor ${this.#autor}, preco ${this.#preco}`
    }

    get preco() {
        return this.#preco
    } 
}

class LivroFisico extends Livro {
    #peso
    constructor(titulo, autor, preco, peso) {
        super(titulo, autor, preco)
        this.#peso = peso 
    }

    #calculoCustoDeEnvio() {
        return this.#peso * this.preco
    }

    get custoDeEnvio() {
        return this.#calculoCustoDeEnvio()
    }
}

class Ebook extends Livro {
    constructor(titulo, autor, preco) {
        super(titulo, autor, preco)
    }

    set tamanhoMB(tamanho) {
        this.tamanho = tamanho
    }

    get tamanhoMB() {
        return this.tamanho
    }
}

const livro1 = new Livro('Primavera Silenciosa', 'Zé', 10.99)
console.log(livro1.informacoes)
const livro2 = new Livro('Senhor dos Aneis', 'J.R.R.Tolkien', 90.99)
console.log(livro2.informacoes)

const livroFisico1 = new LivroFisico('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari ', 130.95, 0.70)
console.log(`${livroFisico1.informacoes}, valor de envio: ${livroFisico1.custoDeEnvio}R$`)
const livroFisico2 = new LivroFisico('Homo Deus: Uma Breve História do Amanhã', 'Yuval Noah Harari ', 130.95, 0.50)
console.log(`${livroFisico2.informacoes}, valor de envio: ${livroFisico2.custoDeEnvio}R$`)

const ebook1 = new Ebook('The Sixth Extinction: An Unnatural History', ' Elizabeth Kolbert ', 40.52)
ebook1.tamanhoMB = '1.2MB'
console.log(`${ebook1.informacoes}, tamanho: ${ebook1.tamanhoMB}`)
const ebook2 = new Ebook('Factfulness: The Ten Reasons We re Wrong About the World--and Why Things Are Better Than You Think ', ' Hans Rosling', 20.99)
ebook2.tamanhoMB = '0.7MB'
console.log(`${ebook2.informacoes}, tamanho: ${ebook2.tamanhoMB}`)