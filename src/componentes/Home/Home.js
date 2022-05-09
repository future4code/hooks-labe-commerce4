import React from "react";
import produto1 from "./../../Img/produto3.jpg";

class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        fotoProduto: produto1,
        descricaoProduto: "Produto 1",
        valorProduto: "200,00",
      },
    ],
  };

  render() {
      const ListaDeProdutos = this.state.produtos.map(
          (produto, indice) =>{
              return (
                  <div>
                      key = {indice}
                      {produto.nome}
                  </div>
              )
          }
      );
      return (
          <div>
              {ListaDeProdutos}
          </div>
      )
   // return ()
//       <div>
//         {this.state.produtos.map((produto) => {
//           return (
//             <produto
//               fotoProduto={produto.fotoProduto}
//               descricaoProduto={produto.descricaoProduto}
//               valorProduto={produto.valorProduto}
//             />
//           );
//         })}
//       </div>
//     );
}

}
export default Home;
