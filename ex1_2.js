class Membro {
    #nome
    #idade
    #peso
    #altutra
    constructor(nome, idade, peso, altura) {
        this.#nome = nome
        this.#idade = idade
        this.#peso = peso
        this.#altutra = altura
    }

    get informacao() {
        return `nome: ${this.#nome}, idade: ${this.#idade}, peso: ${this.#peso}, altura: ${this.#altutra}`
    }

    #calculoIMC() {
        return Math.pow((this.#peso / this.#altutra), 2)
    }

    get calculoIMC() {
        return this.#calculoIMC()
    }

    #desconto() {
        if(this.#idade < 18) {
            return '50R$'
        } else {
            return 'Não possui desconto'
        }
    }

    get desconto() {
        return this.#desconto()
    }
}

const membro1 = new Membro('Luiz', 24, 92.5, 1.82)
const membro2 = new Membro('Rafaela', 15, 65.5, 1.62)
const membro3 = new Membro('João', 18, 85, 1.80)

console.log(`${membro1.informacao}, IMC: ${membro1.calculoIMC}, desconto: ${membro1.desconto}`)
console.log(`${membro2.informacao}, IMC: ${membro2.calculoIMC}, desconto: ${membro2.desconto}`)
console.log(`${membro3.informacao}, IMC: ${membro3.calculoIMC}, desconto: ${membro3.desconto}`)
