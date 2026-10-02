import { useState } from "react";
import "./Exercicio3.scss";

export default function Exercicio3() {
  const [valor, setValor] = useState(0);
  const [historico, setHistorico] = useState([]);

  function alterarValor(delta) {
    const novoValor = valor + delta;
    setValor(novoValor);
    setHistorico([...historico, { acao: delta > 0 ? "+" : "-", valor: Math.abs(delta), resultado: novoValor }]);
  }

  function resetar() {
    setValor(0);
    setHistorico([]);
  }

  return (
    <div className="exercicio3">
      <h2>Exercício 3: Contador com Histórico</h2>
      <div className="contador-display">
        <span className={valor > 0 ? "positivo" : valor < 0 ? "negativo" : "zero"}>
          {valor}
        </span>
      </div>
      <div className="botoes">
        <button onClick={() => alterarValor(-10)}>-10</button>
        <button onClick={() => alterarValor(-1)}>-1</button>
        <button onClick={resetar}>Reset</button>
        <button onClick={() => alterarValor(1)}>+1</button>
        <button onClick={() => alterarValor(10)}>+10</button>
      </div>
      <div className="historico">
        <h3>Histórico</h3>
        {historico.length === 0 ? (
          <p>Nenhuma operação realizada</p>
        ) : (
          <ul>
            {historico.slice().reverse().map((item, index) => (
              <li key={index}>
                {item.acao} {item.valor} = {item.resultado}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}