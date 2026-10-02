import { useState } from "react";
import "./Exercicio5.scss";

const OPERACOES = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero"
};

export default function Exercicio5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacao, setOperacao] = useState("somar");
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]);

  function calcular() {
    const n1 = Number(num1);
    const n2 = Number(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos");
      return;
    }

    const res = OPERACOES[operacao](n1, n2);
    setResultado(res);
    
    if (typeof res === "number") {
      const simbolos = { somar: "+", subtrair: "-", multiplicar: "×", dividir: "÷" };
      setHistorico([...historico, `${n1} ${simbolos[operacao]} ${n2} = ${res}`]);
    }
  }

  function limparHistorico() {
    setHistorico([]);
  }

  return (
    <div className="exercicio5">
      <h2>Exercício 5: Calculadora Completa</h2>
      <div className="calculadora">
        <div className="inputs">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Primeiro número"
            step="any"
          />
          <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
            <option value="somar">+</option>
            <option value="subtrair">-</option>
            <option value="multiplicar">×</option>
            <option value="dividir">÷</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Segundo número"
            step="any"
          />
        </div>
        <button onClick={calcular} className="btn-calcular">Calcular</button>
        <div className="resultado">
          Resultado: <strong>{resultado !== null ? resultado : "—"}</strong>
        </div>
      </div>
      <div className="historico">
        <div className="historico-header">
          <h3>Histórico de Cálculos</h3>
          {historico.length > 0 && <button onClick={limparHistorico}>Limpar</button>}
        </div>
        {historico.length === 0 ? (
          <p className="vazio">Nenhum cálculo realizado</p>
        ) : (
          <ul>
            {historico.slice().reverse().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}