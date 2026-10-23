import { useState } from "react";
import "./index.scss";

import Cabecalho from "../../componentes/cabecalho";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [cadastrado, setCadastrado] = useState(false);

  function cadastrar() {
    if (email === ""|| senha === "") {
      setErro("Preencha o email e a senha!");
      setCadastrado(false);
      return;
    }

    setErro("");
    setCadastrado(true);
  }

  return (
    <div className="login">
      <Cabecalho titulo="Tela de Login" cor="#3b6fe6" corTexto="white" />

      <div className="card">
        <h1>Login</h1>

        <div className="linha">
          <label>Email:</label>
          <input type="email" placeholder="seuemail@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="linha">
          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>

        <button onClick={cadastrar}>Cadastrar</button>

        {erro && <p className="erro">{erro}</p>}

        {cadastrado && (
          <p className="dados">
            Dados cadastrados: <br />
            Email: {email} <br />
            Senha: {senha}
          </p>
        )}
      </div>
    </div>
  );
}
