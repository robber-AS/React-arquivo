import { useState } from "react";
import "./index.scss";

import Cabecalho from "../../componentes/cabecalho";







export default function Ingressos() {
  const [qtd, setQtd] = useState(1);
  const PRECO_INGRESSO = 30;
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [total, setTotal] = useState('');
  
  function rob (){
      let valor = PRECO_INGRESSO * qtd;

      if (meia){
        valor = valor /2;

      }
      if (cupom.toUpperCase()== "QUERO50"){
        valor = valor * 0.5
      }


      setTotal(valor)
  }
  
  return (
    <div className="ingressos">
      <Cabecalho titulo="Venda de Ingressos" cor="#39e695" corTexto="white" />
     
      
      <div className="card">
        <h1>Venda de Ingressos</h1>

        <div className="linha">
          <label>Quantidade:</label>
          <input
            type="number"  min="0"  value={qtd}    onChange={(e)=>setQtd(e.target.value)}
          />
        </div>

        <div className="linha">
          <label>Meia Entrada:</label>

          <input type="checkbox"  checked={meia}    onChange={(e)=>setMeia(e.target.checked)}/>
        </div>

        <div className="linha">
          <label>Cupom:</label>
          <input   type="text"  value={cupom} onChange={(e) => setCupom(e.target.value)}
          />
        </div>

        <div className="linha">
          <label></label>
          <button onClick={rob}>Calcular</button>
        </div>

        <p className="total">O total é R$ {total}</p>
      </div>
    </div>
  );
}
