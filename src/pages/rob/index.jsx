import "./index.scss";
import { useState } from "react";

export default function Rob() {
  const [descricao1, setDescricao1] = useState("Eu ❤ info  ");
  const [cor,setcor]=useState('');
  const [escolha,setescolha]=useState(false);

  function trocarCor(e){
    let novovalor=e.target.value;
    setcor(novovalor)

  }


  function mudar(e) {
    let novovalor = e.target.value;
    setDescricao1(novovalor);
  }
  function mudarCheck(e) {
    let novovalor = e.target.checked;
    setescolha(novovalor);
  }

  return (
    <div className="pagina-contato" style={{backgroundColor:cor}}>
      <section>
        <h1>{descricao1}</h1>

        <input type="text" onChange={mudar} />
      </section>

      <hr></hr>

      <section>
        <h1>{cor}</h1>

        <input type="color" onChange={trocarCor} />
      </section>

      <section>
        <p>Gosta de programar?{escolha ? "Sim": "Não"}</p> 

        <input type="checkbox" onChange={mudarCheck} />
      </section>
    </div>
  );
}
