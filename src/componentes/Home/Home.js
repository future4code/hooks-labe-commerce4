// import React from 'react';
// import Carrinho from "./componentes/Carrinho/Carrinho";
// import Produtos from "./componentes/Produtos/Produtos";
// import produto1 from "../../img/produto1.jpg";
// import produto2 from "../../img/produto2.jpg";
// import produto3 from "../../img/produto3.jpg";
// import produto4 from "../../img/produto4.jpg";
// import produto5 from "../../img/produto5.jpg";
// import produto6 from "../../img/produto6.jpg";
// import produto7 from "../../img/produto7.jpg";
// import produto8 from "../../img/produto8.jpg";
// import produto9 from "../../img/produto9.jpg";
// import produto10 from "../../img/produto10.jpg";



// const produtos = [
//   { id: 1, nome: "Camiseta Space Boy", valor: 180.00, img: produto1 },
//   { id: 2, nome: "Camiseta Space Moon", valor: 100.00, img: produto2 },
//   { id: 3, nome: "Camiseta Space Art", valor: 200.00, img: produto3 },
//   { id: 4, nome: "Camiseta Lost in Space", valor: 500.00, img: produto4 },
//   { id: 5, nome: "Camiseta Space Guitar", valor: 400.00, img: produto5 },
//   { id: 6, nome: "Camiseta Space Rock", valor: 260.00, img: produto6 },
//   { id: 7, nome: "Camiseta Space Art", valor: 70.00, img: produto7 },
//   { id: 8, nome: "Camiseta Give me Some Space", valor: 92.00, img: produto8 },
//   { id: 9, nome: "Camiseta NASA", valor: 300.00, img: produto9 },
//   { id: 10, nome: "Camiseta Space Alien", valor: 50.00, img: produto10 }
// ]


// class Home extends React.Component {
//   state = {
//     carrinho: []
//   };

//   addProduto = (prodId) => {
//     const produtoNoCarrinho = this.state.carrinho.find(
//       (produto) => prodId === produto.id
//     );
//     if (produtoNoCarrinho) {
//       const novosProdutosCarrinho = this.state.carrinho.map((produto) => {
//         if (prodId === produto.id) {
//           return {
//             ...produto,
//             quantidade: produto.quantidade + 1
//           };
//         }
//         return produto;
//       });
//       this.setState({ carrinho: novosProdutosCarrinho });
//     } else {
//       const addProdutoNoCarrinho = produtos.find(
//         (produto) => prodId === produto.id
//       );
//       const novosProdutosCarrinho = [
//         ...this.state.carrinho,
//         { ...addProdutoNoCarrinho, quantidade: 1 }
//       ];
//       this.setState({ carrinho: novosProdutosCarrinho });
//     }
//   };

//   removeProduto = (prodId) => {
//     const updateCart = this.state.carrinho
//       .map((produto) => {
//         if (produto.id === prodId) {
//           return {
//             ...produto,
//             quantidade: produto.quantidade - 1
//           };
//         }
//         return produto;
//       })
//       .filter((produto) => produto.quantidade > 0);
//     this.setState({ carrinho: updateCart });
//   };

//   render() {
//     return (
//       <div>
//         <Produtos produtos={produtos} addProduto={this.addProduto} />
//         <Carrinho
//           carrinho={this.state.carrinho}
//           removeProduto={this.removeProduto}
//           addProduto={this.addProduto}
//         />
//       </div>
//     );
//   }
// }

// export default Home;









