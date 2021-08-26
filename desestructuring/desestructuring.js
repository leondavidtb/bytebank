const pares = [2, 4, 6, 8, 10];
const impares = [1, 3, 5, 7, 9];

const numeros = [...pares, ...impares];

const [num1, num2, ...outros] = [1, 2, 3, 4 ,5];

console.log(num1, num2, outros);

const pessoa = {
    nome: "Leonardo",
    idade: 24,
    telefone: "(88) 99999-9999"
}

const pessoa1 = {...pessoa, endereco: "Rua a, 1, bairro b, Morada Nova - CE"}

console.log(pessoa1)

const {nome} = pessoa
const {idade} = pessoa

console.log(nome);
console.log(idade)

function imprimirDados({nome, idade}){
    console.log(nome, idade);
}

imprimirDados(pessoa)