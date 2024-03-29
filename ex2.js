class Animal {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    get informacao() {
        return `Animal: ${this.#nome}, idade: ${this.#idade}`
    }

    set somCaracteristico(som) {
        this.som = som
    }

    get somCaracteristico() {
        return this.som
    }

    get nome () {
        return this.#nome
    }
}

class Mamifero extends Animal {

    constructor(nome, idade) {
        super(nome, idade)
    }

    set tipoDePelo(pelo) {
        this.pelo = pelo
    }

    get tipoDePelo() {
        return this.pelo
    }
}

class Ave extends Animal {
    
    constructor(nome, idade) {
        super(nome, idade)
    }

    set tipoDeBico(bico) {
        this.bico = bico
    }

    get tipoDeBico() {
        return this.bico
    }

    #verificaSePodeVoar() {
        if (this.nome == 'Falcão' || this.nome == 'Aguia' || this.nome == 'Pombo' || this.nome == 'Bem-te-vi' || this.nome == 'Tucano' || this.nome == 'Beija-flor') 
        {
            return 'Pode Voar'
        } else {
            return 'Não pode voar'
        }
    }

    get verificaSePodeVoar() {
        return this.#verificaSePodeVoar()
    }
}


const mamifero1 = new Mamifero('Gato', 5)
mamifero1.tipoDePelo = 'guarda'
mamifero1.somCaracteristico = 'miado'
console.log(`${mamifero1.informacao} tipo de pelo: ${mamifero1.tipoDePelo}, som: ${mamifero1.somCaracteristico}`)

const mamifero2 = new Mamifero('Cão', 12)
mamifero2.tipoDePelo = 'arenosos'
mamifero2.somCaracteristico = 'latido'
console.log(`${mamifero2.informacao} tipo de pelo: ${mamifero2.tipoDePelo}, som: ${mamifero2.somCaracteristico}`)

const mamifero3 = new Mamifero('Cavalo', 5)
mamifero3.tipoDePelo = 'crina'
mamifero3.somCaracteristico = 'relincho'
console.log(`${mamifero3.informacao} tipo de pelo: ${mamifero3.tipoDePelo}, som: ${mamifero3.somCaracteristico}`)

const ave1 = new Ave('Tucano', 10)
ave1.tipoDeBico = 'Bico longo e colorido'
ave1.somCaracteristico = 'toc-toc'
console.log(`${ave1.informacao}, tipo de bico: ${ave1.tipoDeBico}, som: ${ave1.somCaracteristico}, ${ave1.verificaSePodeVoar}`)

const ave2 = new Ave('Beija-flor', 2)
ave2.tipoDeBico = 'Bico longo e fino'
ave2.somCaracteristico = 'zumbido'
console.log(`${ave2.informacao}, tipo de bico: ${ave2.tipoDeBico}, som: ${ave2.somCaracteristico}, ${ave2.verificaSePodeVoar}`)

const ave3 = new Ave('Colhereiro', 10)
ave3.tipoDeBico = 'Bico em forma de colher'
ave3.somCaracteristico = 'grasnado alto'
console.log(`${ave3.informacao}, tipo de bico: ${ave3.tipoDeBico}, som: ${ave3.somCaracteristico}, ${ave3.verificaSePodeVoar}`)