import React from "react";
import { StyledImagem } from "./StyledImagem";

class Produtos extends React.Component {
  state ={
    query:"",
    mimPrice: "",
    maxPrice: "",
    sortingParameter: "nome",
    order: 1

  }

  atualizaQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  atualizaMimPrice = (event) => {
    this.setState({ mimPrice: event.target.value });
  };

  atualizaMaxPrice = (event) => {
    this.setState({ maxPrice: event.target.value });
  };

  atualizaSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value });
  };

  atualizaOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>LabeCommerce</h1>
        <div>
          <input
          placeholder="Pesquisar"
          value={this.state.query}
          onChange={this.atualizaQuery}
          />

          <input
            type="Number"
            placeholder="Preço mínino"
            value={this.state.mimPrice}
            onChange={this.atualizaMimPrice}
          />

          <input
            type="Number"
            placeholder="Preço máximo"
            value={this.state.maxPrice}
            onChange={this.atualizaMaxPrice}
          />

          <div>
            <label>Ordenação: </label>
            <select
              name="sort"
              value={this.state.sortingParameter}
              onChange={this.atualizaSortingParameter}
            >
              <option value="nome">Título</option>
              <option value="valor">Preço</option>
            </select>


            <div>
            <label>Ordenação: </label>
            <select
              name="order"
              value={this.state.order}
              onChange={this.atualizaOrder}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
            </div>
          </div>
          

        </div>
        
        {this.props.produtos
        .filter((produto) => {
          return produto.nome
            .toLowerCase()
            .includes(this.state.query.toLowerCase());
        })

        .filter((produto) => {
          return (
            this.state.mimPrice === "" || produto.valor >= this.state.mimPrice
          );
        })
        .filter((produto) => {
          return (
            this.state.maxPrice === "" || produto.valor <= this.state.maxPrice
          );
        })
        .sort((currentProduto, nextProduto) => {
          switch (this.state.sortingParameter){
            case "nome":
              return this.state.order * currentProduto.nome.localeCompare(nextProduto.nome)
            default:
              return this.state.order * (currentProduto.valor - nextProduto.valor)
          }
        })

        .map((produto) => {
          return (
            <div className="produtos-card" key={produto.id}>
              <div>{produto.nome}</div>
              <div>{produto.valor}</div>
               <StyledImagem><img src={produto.img}/></StyledImagem>
              <button onClick={() => this.props.addProduto(produto.id)}>
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Produtos;



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

// export class Produtos extends React.Component {
//   state = {
//     listaDeProdutos: [
//       { id: 1, nome: "Camiseta 1", valor: "R$109,00", img: produto1 },
//       { id: 3, nome: "Camiseta 2", valor: "R$180,00", img: produto2 },
//       { id: 3, nome: "Camiseta 3", valor: "R$199,00", img: produto3 },
//       { id: 3, nome: "Camiseta 4", valor: "R$150,00", img: produto4 },
//       { id: 3, nome: "Camiseta 5", valor: "R$100,00", img: produto5 },
//       { id: 3, nome: "Camiseta 6", valor: "R$1189,00", img: produto6 },
//       { id: 3, nome: "Camiseta 7", valor: "R$129,00", img: produto7 },
//       { id: 3, nome: "Camiseta 8", valor: "R$130,00", img: produto8 },
//       { id: 3, nome: "Camiseta 9", valor: "R$110,00", img: produto9 },
//       { id: 3, nome: "Camiseta 10", valor: "R$99,00", img: produto10 }
//     ],
//   };

//   render() {
//     const listaDeProdutosComponentes = this.state.listaDeProdutos.map(
//       (produto, indice) => {
//         return (
//           <StyledCardProduto>
//           <div
//             key={indice}
//           >
            
//               <div>{produto.nome}</div>
//               <div>{produto.valor}</div>
//               <StyledImagem>
//                 <img src={produto.img} alt={produto.nome} /><button>Clicar</button>
//               </StyledImagem>
            
//           </div>
//           </StyledCardProduto>
//         );
//       }
//     );

//     return (
//       <div>
//         <h1>Produtos</h1>
//         {listaDeProdutosComponentes}
//       </div>
//     );
//   }
// }

// export default Produtos
