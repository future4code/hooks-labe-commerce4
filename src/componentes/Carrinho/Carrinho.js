import React from "react";

class Carrinho extends React.Component {
    render() {
        // console.log(produtos);
        // console.log(adicionarNoCarrinho);
        return(
           <div>
                <h3>Carrrinho:</h3>
                <div>
                    <div>
                        <p>1x</p>
                        <p> Produto1 </p>
                        <button>Remover</button>
                    </div>
                </div>
                <p> Valor Total</p>
           </div>

        )
    }
}

export default Carrinho