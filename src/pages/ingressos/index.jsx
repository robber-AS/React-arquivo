import { useState } from "react";
import "./index.scss";

const PRECO_INGRESSO = 30;

export default function Ingressos() {
  const [qtd, setQtd] = useState(1);
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [total, setTotal] = useState(null);
  
  function rob (){
    let valor = Number(qtd) * PRECO_INGRESSO;

    if (meia){
      valor = valor / 2;

    }

    if (cupom.toUpperCase() == "QUERO50"){
      valor = valor * 0.5
    }

    setTotal(valor);
  }
  
  return (
    <div className="ingressos">
      <div className="card">
        <h1>Venda de Ingressos</h1>

        <div className="linha">
          <label>Quantidade:</label>
          <input
            type="number"  min="0"  value={qtd}    onChange={(e) => setQtd(e.target.value)}
          />
        </div>

        <div className="linha">
          <label>Meia Entrada:</label>

          <input type="checkbox"  checked={meia} onChange={(e)=>setMeia(e.target.checked)}   />
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
