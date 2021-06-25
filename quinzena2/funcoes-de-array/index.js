//console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA :)")



//----------Exercícios de interpretação de código

//1

// o item vai ler tudo uma vez. o index vai mostrar o indice de cada um, um por vez. e o array vai imprimir toda tabaela novamente.

//2

// Os nomes 

//3

//vai ser impresso os apelidos menos o da chijo



//-----------------------------Exercícios de escrita de código


//A 



// const pets = [
//     { nome: "Kurama", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]



// const nomeDoguinhos = pets.map((pet) => {
//     return pet.nome

// })

// console.log(nomeDoguinhos)

// //B

// const dogsSalsichas = pets.filter((pet) => {
//     return pet.raca === "Salsicha"
// }
// )

// console.log(dogsSalsichas)

// //C


// const dogsPoodles = pets.filter((pet) => {
//     return pet.raca === "Poodle"
// }) 

// const mensagemDesconto = dogsPoodles.map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
// })


// console.log(mensagemDesconto)




//--------------------------------2



// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 },
// ]

// const nomeItens = produtos.map((produtos) => {
//     return produtos.nome
// })

// console.log(nomeItens)


//B

// const descontoItens = produtos.map((produto) => {
//  return {
//      nome: produto.nome,
//         preco: (produto.preco - (produto.preco * 0.05)).toFixed(2)
//  }
// })

// console.log(descontoItens)



//C

// const categoriaBebida = produtos.filter((produtos) => {
//     return produtos.categoria
// })
// console.log(categoriaBebida)

// const categoriaBebida = produtos.filter((produtos) => {
//     return produtos.categoria === "Bebidas"
// })
// console.log(categoriaBebida)


// //D

// const objetoYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// })
// console.log(objetoYpe)


//E

// const arrayYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// })

// const itensYpe = arrayYpe.map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
// })

// console.log(itensYpe)