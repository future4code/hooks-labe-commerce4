import React from 'react';
import Carrinho from "./componentes/Carrinho/Carrinho";
import Produtos from "./componentes/Produtos/Produtos";
import produto1 from "./img/produto1.jpg";
import produto2 from "./img/produto2.jpg";
import produto3 from "./img/produto3.jpg";
import produto4 from "./img/produto4.jpg";
import produto5 from "./img/produto5.jpg";
import produto6 from "./img/produto6.jpg";
import produto7 from "./img/produto7.jpg";
import produto8 from "./img/produto8.jpg";
import produto9 from "./img/produto8.jpg";
import produto10 from "./img/produto10.jpg";



const produtos = [
  { id: 1, nome: "Camiseta 1", valor: 200.00, img: produto1 },
  { id: 3, nome: "Camiseta 2", valor: 200.00, img: produto2 },
  { id: 3, nome: "Camiseta 3", valor: 200.00, img: produto3 },
  { id: 3, nome: "Camiseta 4", valor: 200.00, img: produto4 },
  { id: 3, nome: "Camiseta 5", valor: 200.00, img: produto5 },
  { id: 3, nome: "Camiseta 6", valor: 200.00, img: produto6 },
  { id: 3, nome: "Camiseta 7", valor: 200.00, img: produto7 },
  { id: 3, nome: "Camiseta 8", valor: 200.00, img: produto8 },
  { id: 3, nome: "Camiseta 9", valor: 200.00, img: produto9 },
  { id: 3, nome: "Camiseta 10", valor:200.00, img: produto10 }
]


class App extends React.Component {
  state = {
    carrinho: []
  };

  addProduto = (prodId) => {
    const produtoNoCarrinho = this.state.carrinho.find(
      (produto) => prodId === produto.id
    );
    if (produtoNoCarrinho) {
      const novosProdutosCarrinho = this.state.carrinho.map((produto) => {
        if (prodId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          };
        }
        return produto;
      });
      this.setState({ carrinho: novosProdutosCarrinho });
    } else {
      const addProdutoNoCarrinho = produtos.find(
        (produto) => prodId === produto.id
      );
      const novosProdutosCarrinho = [
        ...this.state.carrinho,
        { ...addProdutoNoCarrinho, quantidade: 1 }
      ];
      this.setState({ carrinho: novosProdutosCarrinho });
    }
  };

  removeProduto = (prodId) => {
    const updateCart = this.state.carrinho
      .map((produto) => {
        if (produto.id === prodId) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);
    this.setState({ carrinho: updateCart });
  };

  render() {
    return (
      <div>
        <Produtos produtos={produtos} addProduto={this.addProduto} />
        <Carrinho
          carrinho={this.state.carrinho}
          removeProduto={this.removeProduto}
          addProduto={this.addProduto}
        />
      </div>
    );
  }
}

export default App;









// import Produtos from './componentes/Produtos/Produtos';

// class App extends React.Component {
//   render() {
//     return <Produtos/>;
//   }
// }

// export default App;
