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
  
  
  if (jogar) {
  
     let carta1Jogador = comprarCarta()
     let carta2Jogador = comprarCarta()
     let carta1Pc = comprarCarta()
     let carta2Pc = comprarCarta()
  
     let somarCartaJogador = carta1Jogador.valor + carta2Jogador.valor
     let somarCartaPc = carta1Pc.valor + carta2Pc.valor
  
     console.log(`Cartas Jogador: ${carta1Jogador.texto} ${carta2Jogador.texto} ${somarCartaJogador}`)
     console.log(`Cartas Pc: ${carta1Pc.texto} ${carta2Pc.texto} ${somarCartaPc}`)
  
  if (somarCartaJogador === somarCartaPc) {
     console.log("Empate!")
  
  } else if (somarCartaJogador > somarCartaPc) {
     console.log("O usuário ganhou!")
  
  } else if (somarCartaJogador < somarCartaPc) {
     console.log("O computador ganhou!")
  }
  
  } else {
     console.log("O jogo acabou")
  }
  