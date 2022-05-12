import React from "react";
import { StyledImagem , StyledCardProduto } from "./StyledImagem";

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
            <StyledCardProduto key={produto.id}>
              <div>{produto.nome}</div>
              <div>{produto.valor}</div>
               <StyledImagem><img src={produto.img}/></StyledImagem>
              <button onClick={() => this.props.addProduto(produto.id)}>
                Comprar
              </button>
              </StyledCardProduto>
          );
        })}
      </div>
    );
  }
}

export default Produtos;



