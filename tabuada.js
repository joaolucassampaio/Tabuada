//Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

let number = parseFloat(prompt("Digite um número para calcular a tabuada:"))
let multiplicationTable = ""

for(let i = 1; i <=20; i++) {
    multiplicationTable += i + " x " + number + " = " + (i * number) + "\n"
}

alert(multiplicationTable)

// 3 -> Criei uma variável let(permite o valor ser alterado) para armazenar o número do usuário(através do prompt), usando o parseFloat para converter de string para float(o prompt armazena os dados em strings).

// 4 -> Criei uma variável let vazia.

// 6 -> Usei o for para criar uma repetição controlada(para repetir até um valor que eu gostaria). Entre parênteses, eu criei uma variável i(índice), atribuí a ela o valor 1 e passei a condição de que enquanto i <= 20, acontecesse a repetição do for. No final, seria somado +1 no i.

// 7 -> Misturei variáveis com strings para criar um esqueleto de tabuada.

// 10 -> Usei a função alert para mostrar os resultados ao usuário.
