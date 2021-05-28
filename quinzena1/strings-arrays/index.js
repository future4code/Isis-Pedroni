//----------------1----------------//

// undefined
// null
// 11
// 3
// 1 vira 19
// 9

//1

// let nomedoUsuario = prompt("digite seu nome")
// let emailDoUsuario = prompt("digite seu email")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomedoUsuario}!`)




//2
// let arrayComidas = ["batatinha","sorvete","lasanha","hamburguer","pizza"]
// console.log("Comidas favoritas", arrayComidas)

// console.log(`Essas são as minhas comidas preferidas${arrayComidas.toString().replaceAll(",","\n")}`)

// let suaComida = String(prompt("Qual sua comida Favorita?"))
// arrayComidas[1] = suaComida
// console.log(arrayComidas)





//3
let listaDeTarefas = []

listaDeTarefas [0] = prompt("Escreva 1 tarefa:")
listaDeTarefas [1] = prompt("Escreva 2 tarefa:")
listaDeTarefas [2] = prompt("Escreva 3 tarefa:")

console.log("Suas Tarefas", listaDeTarefas)


let indice = Number(prompt("Qual tarefa você já realizou:"))
console.log(`Digite uam tarefa que já realizou: 0, 1 ou 2 ${indice}`)
listaDeTarefas.slice(indice)
console.log(listaDeTarefas)