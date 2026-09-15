import "./index.scss";

export default function Eventos() {
  function Alterou(e) {
    let novovalor = e.target.value;
    alert("Você alterou o valor do input" + " " + novovalor);
  }

  function Alterou(e) {
    let novovalor = e.target.value;
    alert("Alterou o Valor para : " + novovalor);
  }

  function AlterouB(e) {
    let novovalor = e.target.checked; //  booleano
    alert("Alterou o Valor para : " + novovalor);
  }

  function alteroucheck(e) {
    let novovalor = e.target.checked;
    alert("Alterou o Valor do Checkbox/Radio para" + " " + novovalor);
  }

  function Passou() {
    alert("Passou o Mouse Sobre ");
  }

  return (
    <div className="Pagina-Eventos  pagina ">
      <div className="container">
        <h2>Entendendo eventos</h2>

        <p onMouseMove={Passou}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sed
          ad adipisci architecto fuga nam ut saepe necessitatibus ab nostrum
          omnis, repellat fugit alias praesentium expedita minus culpa
          cupiditate numquam?
        </p>

        <input
          onChange={Alterou}
          type="text"
          placeholder="Digite aqui alguma coisa"
        />

        <select onChange={Alterou}>
          <option>Selecione</option>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>

        <div className="opcoes">
          <h2>Check</h2>

          <label>
            <input onChange={alteroucheck} type="radio" name="opcao" />
            Opção 1
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 2
          </label>

          <label>
            <input type="checkbox" name="opcao" />
            Opção 4
          </label>

          <label>
            <input onChange={alteroucheck} type="checkbox" name="opcao" />
            Opção 5
          </label>
        </div>
        <textarea onChange={Alterou} placeholder="Escreva aqui"></textarea>

        <button>Clique aqui</button>
      </div>
    </div>
  );
}
