import { useState } from "react";
import "./Exercicio2.scss";

export default function Exercicio2() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(e) {
    e.preventDefault();
    if (tarefa.trim()) {
      setTarefas([...tarefas, { id: Date.now(), texto: tarefa, concluida: false }]);
      setTarefa("");
    }
  }

  function toggleTarefa(id) {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <div className="exercicio2">
      <h2>Exercício 2: Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="lista-tarefas">
        {tarefas.map(t => (
          <li key={t.id} className={t.concluida ? "concluida" : ""}>
            <span onClick={() => toggleTarefa(t.id)}>{t.texto}</span>
            <button onClick={() => removerTarefa(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: {tarefas.length} | Concluídas: {tarefas.filter(t => t.concluida).length}</p>
    </div>
  );
}