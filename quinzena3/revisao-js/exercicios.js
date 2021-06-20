// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = array.slice(0).reverse(0)
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numeros = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numeros.push(array[i] ** 2)

    }

  }
  return numeros
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const numeros = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numeros.push(array[i])
    }

  }
  return numeros
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }

  return maiorNumero

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  for (let i = 0; i < array.length; i++) {
  }
  return array.length

}
//sinto eu quee estou roubando nessa 

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3


  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const arrayBooleano = [a, b, c, d, e]
  return arrayBooleano

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numeros = []
  for (let i = 0; i < n; i++) {
    numeros.push(i * 2)
  }
  return numeros
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a !== b && b !== c && c !== a) {
    return `Escaleno`
  } else if (a === b && b === c && c === a) {
    return `Equilátero`
  } else if (a === b && a !== c) {
    return `Isósceles`
  }

  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  const comparaDois = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: false,
    diferenca: 0
  }
  if (num1 > num2) {
    comparaDois.maiorNumero - num1
    comparaDois.maiorDivisivelPorMenor = true
    comparaDois.diferenca = num1 - num2
  } else if (num2 > num1) {
    comparaDois.maiorNumero - num2
    comparaDois.maiorDivisivelPorMenor = true
    comparaDois.diferenca = num2 - num1
  } else {
    comparaDois.maiorNumero = num2
    comparaDois.maiorDivisivelPorMenor = true
    comparaDois.diferenca - 0
  }

  return comparaDois
}

// Não está imprimindo o maioNumero

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux

      }
    }
  }

  let novoArray = []
  novoArray.push(array[array.length - 2])
  novoArray.push(array[1])

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  novoArray = array.sort(function(a, b){
    return a - b
  })
  
  return novoArray
}


// EXERCÍCIO 12
function filmeFavorito() {
  let assistirFilme = {
    nome: `O Diabo Veste Prada`,
    ano: 2006,
    diretor: `David Frankel`,
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return assistirFilme
}


// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  let assistirFilme = {
    nome: `O Diabo Veste Prada`,
    ano: 2006,
    diretor: `David Frankel`,
    atores: [`Meryl Streep`, ` Anne Hathaway`, ` Emily Blunt`, ` Stanley Tucci`]
  }
  return `Venha assistir ao filme ${assistirFilme.nome}, de ${assistirFilme.ano}, dirigido por ${assistirFilme.diretor} e estrelado por ${assistirFilme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const medidasRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return medidasRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return pessoaAnonima

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

  const maioresDeIdade = arrayDePessoas.filter((numero) => {
    return numero.idade >= 18
  })
  return maioresDeIdade
}


// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter((numero) => {
    return numero.idade < 18
  })
  return maioresDeIdade

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  let numeros = []
  for (let i = 0; i < array.length; i++) {
    numeros.push(array[i] * 2)
  }
  return numeros
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

  let multiplicarArray = []
  array.map((numero) => {
    let saidaString = numero * 2
    multiplicarArray.push(saidaString.toString())
  })

return multiplicarArray
}


// EXERCÍCIO 17C
function verificaParidade(array) {
  const verificarPar = array.map(array => {
    return (array + (array % 2 === 0 ? ' é par' : ' é ímpar')).toString()
  })

  return verificarPar

}


// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = []
   pessoas.filter((autorizadas) => {
     if(autorizadas.altura >= 1.5 && autorizadas.idade > 14 && autorizadas.idade < 60){
      pessoasAutorizadas.push(autorizadas)
     }
   })
   return pessoasAutorizadas
}
// esta devolvendo o array inteiro

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
   const naoAutorizadas = []
   pessoas.map((restritas) => {
     if(restritas.altura <= 1.5 || restritas.idade <= 14 || restritas.idade >= 60){
       naoAutorizadas.push(restritas)
     }
   })
   return naoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let novoArray = consultasNome.sort(function(a, b) {
    if (a.nome > b.nome){
      return 1;
    }
    if (a.nome < b.nome){
      return -1;
    }
    return 0;
  });
  return novoArray

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  // Professor Bruno fez em aula mas, preferi nao colocar pois fiquei com algumas duvidas.
}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
