// condicionais
let a = 10
let b = 2

if (a > b) {
    console.log("a e maior que b")
}


//for (let index = 0; index < array.length; index++) {
//    const element = array[index];}

for (let index = 1; index < a ; index++){
    console.log(`contagem em ${index}`)
}



function comprimento(nome){
    console.log(`Hello ${nome}`)
}

comprimento ("artur")

//funcoes callback ou funcoe que chamam outras funcoes

function Apresentacao(){//isso e um metodo
    return `Ola meu nome e ${pessoa.nome} tenho ${pessoa.idade}, prazer`
}

const pessoa ={ // isso e um objeto
    nome:"Tulio",
    idade: 23,
    Apresentacao,
}

console.log(pessoa.Apresentacao())

// arroow functions
const duplo = (x) => x * 2
console.log(duplo(100))

//bibliotecas de funcoes
const matematica = {
    soma: (a,b) => a + b ,
    mult: (a,b) => a * b
}

console.log(matematica.soma(2,5));
console.log(matematica.mult(2,5))

//desconstrucao de objeto
const estudante = {nome: "gabrie", posicao: 4, matricula: 211068}
const { posicao , matricula } = estudante
console.log(matricula); 
console.log(estudante.nome)

//rest operator
let {A,B, ...rest} = {A:100,B:200,C:300,D:400}
console.log(rest)

