import { useState } from "react";
import "./Exercicio1.scss";

export default function Exercicio1() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nome && idade) {
      setMensagem(`Olá ${nome}, você tem ${idade} anos!`);
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  }

  return (
    <div className="exercicio1">
      <h2>Exercício 1: Formulário Simples</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div className="campo">
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite sua idade"
            min="0"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}