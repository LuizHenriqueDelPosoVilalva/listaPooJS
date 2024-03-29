class Calculadora {

    #somar(a, b) {
        return a + b
    }

    somar(a, b) {
        return this.#somar(a, b)
    }

    #subtrair(a, b) {
        return a + b
    }

    subtrair(a, b) {
        return this.#subtrair(a, b)
    }

    #calcularRaizQuadrada(numero) {
        return Math.pow(numero,2)
    }

    raizQuadrada(numero) {
        return this.#calcularRaizQuadrada(numero)
    }

    #calcularPotencia(base, expoente) {
        return Math.pow(base, expoente)
    }

    potencia(base, expoente) {
        return this.#calcularPotencia(base, expoente)
    }

    #multiplicar(a, b) {
        return a * b
    }

    multiplicar(a, b) {
        return this.#multiplicar(a, b)
    }

    #dividir(a, b) {
        return a / b
    }

    dividir(a, b) {
        return this.#dividir(a, b)
    }
}

const calculo = new Calculadora()
console.log(`Soma: ${calculo.somar(5, 5)}`)
console.log(`Subtração: ${calculo.subtrair(10, 5)}`)
console.log(`Multiplicação: ${calculo.multiplicar(20, 5)}`)
console.log(`Divisão: ${calculo.dividir(10, 3)}`)
console.log(`Raiz quadrada: ${calculo.raizQuadrada(8)}`)
console.log(`Potencia: ${calculo.potencia(9, 3)}`)