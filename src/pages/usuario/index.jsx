import "./index.scss";

export default function CadastroFuncionario() {
  function AlterarNome(e) {
    let novoNome = e.target.value;

    console.log("Nome digitado:", novoNome);
  }

  // Evento onChange do departamento
  function AlterarDepartamento(e) {
    let novoDepartamento = e.target.value;

    alert("Departamento selecionado: " + novoDepartamento);
  }

  // Evento onChange do tipo
  function AlterarTipo(e) {
    let novoTipo = e.target.value;

    console.log("Tipo de funcionário:", novoTipo);
  }

  // Evento onMouseEnter
  function EntrouMouse() {
    alert("O mouse entrou na área!");
  }

  // Evento onMouseLeave
  function SaiuMouse() {
    alert("O mouse saiu da área!");
  }

  // Evento onClick
  function Cadastrar() {
    alert("Funcionário cadastrado com sucesso!");
  }

  // Evento onClick
  function Limpar() {
    alert("Botão limpar clicado!");
  }

  // Evento onSubmit
  function EnviarFormulario(e) {
    e.preventDefault();

    alert("Formulário enviado!");
  }

  return (
    <div className="Pagina-Cadastro pagina">
      <div className="container">
        <h2>Cadastro de Funcionário</h2>

        <form onSubmit={EnviarFormulario}>
          <label>Nome do funcionário:</label>

          <input
            type="text"
            onChange={AlterarNome}
            placeholder="Digite o nome"
          />

          <br />
          <br />

          <label>Departamento:</label>

          <select onChange={AlterarDepartamento}>
            <option value="">Selecione</option>

            <option value="Administração">Administração</option>

            <option value="Recursos Humanos">Recursos Humanos</option>

            <option value="Financeiro">Financeiro</option>

            <option value="Marketing">Marketing</option>

            <option value="TI">TI</option>
          </select>

          <br />
          <br />

          <label>Tipo de funcionário:</label>

          <div className="opcoes">
            <label>
              <input
                type="radio"
                name="tipo"
                value="Efetivo"
                onChange={AlterarTipo}
              />
              Efetivo
            </label>

            <label>
              <input
                type="radio"
                name="tipo"
                value="Temporário"
                onChange={AlterarTipo}
              />
              Temporário
            </label>

            <label>
              <input
                type="radio"
                name="tipo"
                value="Estagiário"
                onChange={AlterarTipo}
              />
              Estagiário
            </label>

            <label>
              <input
                type="radio"
                name="tipo"
                value="Jovem Aprendiz"
                onChange={AlterarTipo}
              />
              Jovem Aprendiz
            </label>
          </div>

          <br />

          <div
            className="area-mouse"
            onMouseEnter={EntrouMouse}
            onMouseLeave={SaiuMouse}
          >
            PASSE O MOUSE AQUI
          </div>

          <br />

          <button type="button" onClick={Cadastrar}>
            Cadastrar Funcionário
          </button>

          <button type="button" onClick={Limpar}>
            Limpar
          </button>

          <button type="submit">Enviar Formulário</button>
        </form>
      </div>
    </div>
  );
}
