import React from "react";



export class Produtos extends React.Component {
    state = {
      listaDeProdutos: [
        { id: 1, nome: "Camiseta 1", valor: "R$ 250,00", img: },
        { id: 3, nome: "Camiseta 2", valor: "R$180,00", img:  },
      ],
    };
  
    render() {
      const listaDeProdutosComponentes = this.state.listaDeProdutos.map(
        (produto, indice) => {
          return (
            <div
              key={indice}
              style={{
                backgroundColor: "pink",
                border: "1px solid black",
                padding: 10,
              }}
            >
              {produto.nome}
            </div>
            // <ProductCard>
            //   {produto.nome}
            // </ProductCard>
          );
        }
      );
  
      return (
        <div>
          <h1>Produtos</h1>
          {listaDeProdutosComponentes}
        </div>
      );
    }
  }
  
  export default Produtos