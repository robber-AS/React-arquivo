import "./index.scss";

export default function Contador() {
  let valor = 0;

  function aumentar() {
    valor = valor + 1;

    alert("Você aumentou o valor do contador para: " + valor);
  }
  return (
    <div className="Pagina-Contador  pagina ">
      <h1>Contador</h1>
      <section className="contador">
        {" "}
        <button>+</button>
        <button onClick={aumentar}>-</button>
      </section>
    </div>
  );
}
