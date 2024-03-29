class Carro {
    #marca
    #modelo
    #ano
    
    obterInformacao(marca, modelo, ano) {
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }

    get informacao() {
        return `Marca do carro: ${this.#marca}, modelo: ${this.#modelo}, ano: ${this.#ano}`
    }

    #anosDeUso() {
        const ano = new Date().getFullYear()
        return ano - this.#ano
    }

    get anosDeUso() {
        return `Anos de uso: ${this.#anosDeUso()}`
    }
}

const carro1 = new Carro()
carro1.obterInformacao('Fiat', 'Uno', 2008)
console.log(carro1.informacao)
console.log(carro1.anosDeUso)
const carro2 = new Carro()
carro2.obterInformacao('Volkswagen', 'Gol', 2005)
console.log(carro2.informacao)
console.log(carro2.anosDeUso)
