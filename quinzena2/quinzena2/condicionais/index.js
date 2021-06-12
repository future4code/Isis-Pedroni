console.log("Aula 08 - Condicionais lá")


//------------------Exercícios de interpretação de códig


//-------------1


//-------------2

// a) Para que serve o código acima?
//serve para procurar uma indormação

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// o  preco = 2.25

// c) 


//--------------3

//a) esta pedido ao usuario que digite um numero
//b)




//---------------------------------------------Exercícios de escrita de código


//--------------------2

//  A / C
// function calculoIdade(num1) {
//       if (num1 >= 18) {
//           return "Pode Dirigir"

//    } else {
//      return "Não pode dirigir"
//    }
// }

// console.log(calculoIdade(maiorIdade))

//let suaIdade = Number(prompt("qual sua idade?"))
//console.log("idade:", suaIdade)

//--------------------2


//  const periodo = prompt("Qual o periodo que você estuda (M - Matituno, V - Vespotino ou N - Noturno)")
//  if (periodo === "M") {
//     console.log("Bom Dia!")
//  } else if (periodo === "V") {
//     console.log("Boa Tarde!")
// } else {
//      console.log("Boa Noite!")
//  }



//--------------------3

// const periodo = prompt("Qual o periodo que você estuda (M - Matituno, V - Vespotino ou N - Noturno)")

//  switch (periodo) {
//    case "M":
//      console.log("Bom dia!")
//      break
//    case "V":
//     console.log("Boa Tarde!")
//     break
//   case "N":
//     console.log("Bao noite!")
//      break
//    default:
//      console.log("voce nao estuda")
//      break
//  }

 //--------------------4


//   const generoFilme = prompt("Qual genero?")
//   const valorIngresso = Number(prompt("Qual o valor do ingresso?")) 

//   if (generoFilme === 'fantasia' && valorIngresso <= 15) {
//        console.log("Bom filme!")  
//          } else {
//        console.log("Escolha outro filme :(") 
//      }
 

  

//----------------------------Desafio

const generoFilme = prompt("Qual genero?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?")) 

if (generoFilme === 'fantasia' && valorIngresso <= 15) { 
     let querComer = prompt("quer uma lanche? pipoca, chocolate, doces, etc")
     console.log(`Bom filme! Aproveite o seu ${querComer}!`)
       } else {
     console.log("Escolha outro filme :(") 
   }

