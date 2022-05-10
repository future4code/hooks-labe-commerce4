import React from "react";

export class Carrinho extends React.Component {
    state = {
      listaDeProdutos: [
        { nome: "Produto 1" },
        { nome: "Produto 2" },
        { nome: "Produto 3" },
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

export default Carrinho