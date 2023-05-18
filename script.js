// const estudante = {
//   nome: 'Luciano',
//   sobrenome: 'Brito',
//   numeroMatricula: '806124',
//   notasSemestre: [8, 5, 7]
// }

// estudante.modulo = 1

// //estudante['modulo'] = 1

// console.log(estudante.nome)
// //console.log(estudante['nome'])

// console.log(estudante.notasSemestre[1])

// console.log(estudante.modulo)



// const copiaEstudante = {
//     ...estudante,
//     nome: 'Astrodev',
//     notasSemestre: [...estudante.notasSemestre, 9],
//     modulo: estudante.modulo + 1
// }

// console.log(copiaEstudante)

// const estudantesLabenu = []

// estudantesLabenu.push(estudante,copiaEstudante)

// console.log(estudantesLabenu)

// ---------------------------------------------------------------

const carrinho = {
    nome: 'Luciano',
    formaPagamento: 'Dinheiro',
    endereco: 'Rua dos Bobos, 0',
}

carrinho.compras = [
  {
    nomeProduto: 'cuscuz',
    preco: 5,
    quantidade: 200
  }
]

console.log(Array.length)

const carrinhoPresente = {
    ...carrinho,
    nome: 'Toinho',
    formaPagamento:'Cartão Presente'
}

const ambosCarrinhos = []

ambosCarrinhos.push(carrinho,carrinhoPresente)

console.log(ambosCarrinhos)
