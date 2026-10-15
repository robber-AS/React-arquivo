import { useState } from "react";
import "./index.scss";

import Cabecalho from "../../componentes/cabecalho";

export default function Contador() {
  const [contador, setcontador] = useState(0);

  function mais() {
    if (contador < 20) {
      setcontador(contador + 1);
    }
  }

  function menos() {
    if (contador > 0) {
      setcontador(contador - 1);
    }
  }

  return (
      
    
    <div className="contador">
      <Cabecalho/>
      <h1>Contador</h1>
  

      <section className="cont">
        <button onClick={menos}>-</button>
        <h2>{contador}</h2>
        <button onClick={mais}>+</button>
      </section>
    </div>
  );
}
