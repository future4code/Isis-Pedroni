/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

  //        PROJETO!


console.log("Bem vindo(a) ao jogo de Blackjack!")

let jogar = confirm("Quer iniciar uma nova rodada?")
if(confirm("pergunta de sim ou não")) {

   const carta1Jogador = comprarCarta()
   const carta2Jogador = comprarCarta()
   




} else {
	return "O jogo acabou"
}

