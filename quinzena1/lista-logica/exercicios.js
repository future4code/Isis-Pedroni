// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
let num1 = prompt('Digite o primeiro número')
 let num2 = prompt('Digite o segundo número')

 console.log(Number(num1) * Number(num2))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = prompt ("Digite o ano atual:")
  let anoNasciemnto = prompt ("Digite seu ano de nascimento:")
  let idadeFinal = (anoAtual - anoNasciemnto)

  console.log(idadeFinal)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let pesokg = Number(prompt("Seu peso:"))
  let altura = Number(prompt("Sua altura:"))
  let imc = (pesokg/(altura * altura))

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Informe seu nome:")
  const idade = prompt(Number("Informe sua idade:"))
  const email = prompt("Informe seu email:")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email +".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let corUm = prompt ("Qual cor sua cor preferida?")
  let corDois = prompt ("Qual é a sua segunda cor preferida?")
  let CorTres = prompt ("Qual é a sua terceira cor preferida?")
  console.log ([corUm, corDois, CorTres])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const mensagem = prompt(String("Digite aqui"))
  console.log (mensagem.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let valorEspetaculo = Number(prompt("custo de um espetáculo de teatro"))
  let valorIngresso = Number(prompt("valor do ingresso?"))
  let resultadoShow = valorEspetaculo / valorIngresso
  console.log(resultadoShow)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let palavra1 = prompt("Digite uma palavra:")
  let palavra2 = prompt("Digite outra palavra:")
  console.log(palavra1.length == palavra2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavra1 = prompt("Digite uma palavra:")
  let palavra2 = prompt("Digite outra palavra:")
  console.log(palavra1.toUpperCase() == palavra2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
const anoAtual = Number(prompt("Em que ano estamos"))
const anoNascimento = Number(prompt("Ano de nascimento:"))
const anoCarteira = Number(prompt("Ano em que sua carteira de identidade foi emitida:"))

let calculoAno = anoAtual - anoNascimento
let renovacaoCarteira = anoAtual - anoCarteira
let resultadoRG = ((calculoAno <= 20) && (renovacaoCarteira >= 5)) || ((calculoAno > 20) && (calculoAno <= 50) && (renovacaoCarteira >= 10)) || ((anoCarteira > 50) && (renovacaoCarteira >= 15))
console.log(resultadoRG)

}
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
const umAno = Number(prompt("Digite um Ano:"))
let resultadoBis = (umAno % 400 == 0) || (umAno %4 == 0 && umAno % 100 != 0)
console.log(resultadoBis)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
const maiorIdade = prompt("Você tem mais de 18 anos?") =="sim"
const medioCompleto = prompt("Você possui ensino médio completo?") =="sim"
const horasDisponiveis = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") =="sim"

console.log(maiorIdade && medioCompleto && horasDisponiveis)



}