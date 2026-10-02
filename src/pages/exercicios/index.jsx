import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import "./Exercicios.scss";

export { Exercicio1, Exercicio2, Exercicio3, Exercicio4, Exercicio5 };

export default function Exercicios() {
  const exercicios = [
    { id: 1, titulo: "Formulário Simples", descricao: "useState, controlled components, formulário com validação", componente: Exercicio1 },
    { id: 2, titulo: "Lista de Tarefas", descricao: "useState com arrays, map, condicionais, eventos de click", componente: Exercicio2 },
    { id: 3, titulo: "Contador com Histórico", descricao: "useState múltiplo, operações numéricas, renderização de listas", componente: Exercicio3 },
    { id: 4, titulo: "Personalizador de Texto", descricao: "Múltiplos useState, inline styles, inputs variados (color, range, select, checkbox)", componente: Exercicio4 },
    { id: 5, titulo: "Calculadora Completa", descricao: "Objeto de operações, histórico, validação, select para operações", componente: Exercicio5 },
  ];

  return (
    <div className="exercicios-container">
      <h1>Exercícios Práticos - Conceitos do ex01</h1>
      <p className="intro">
        Estes exercícios praticam os conceitos vistos no <code>ex01</code>: 
        <strong>useState</strong>, <strong>controlled components</strong>, 
        <strong>event handlers</strong>, <strong>renderização condicional</strong>, 
        <strong>listas e map</strong>, <strong>inline styles</strong>.
      </p>
      
      <div className="exercicios-grid">
        {exercicios.map(({ id, titulo, descricao, componente: Componente }) => (
          <div key={id} className="exercicio-card">
            <h3>Exercício {id}: {titulo}</h3>
            <p className="descricao">{descricao}</p>
            <Componente />
          </div>
        ))}
      </div>
    </div>
  );
}