import "./index.scss";

export default function Contador() {
  let Contador = 0;

  function aumentar() {
    Contador = Contador + 1;

    alert("Você aumentou o valor do contador para: " + Contador);
  }

  function diminuir() {
    Contador = Contador - 1;

    alert("Você diminuiu o valor do contador para: " + Contador);
  }
  return (
    <div className="Pagina-Contador  pagina ">
      <h1>Contador</h1>
      <section className="contador">
        
        <button onClick={aumentar}>+</button>
          {Contador}
        <button onClick={diminuir}>-</button>
      </section>
    </div>
  );
}
