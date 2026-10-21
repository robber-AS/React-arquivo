import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import '../../componentes/cabecalho'
import Cabecalho from '../../componentes/cabecalho';


export default function ChamadaAPI() {
    const [cep, setcep] = useState('');
    const [endereco, setEndereco] = useState();

       async function buscarCep() { 
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        
        let resp =   await axios.get(url);
        let dados = resp.data;
        let msg = dados.logradouro + " - " + dados.bairro + " - " + dados.localidade + " - " + dados.uf;
        setEndereco(msg);



     }
  return (
    <div className="chamadaAPI">
      <Cabecalho titulo="Chamada API" />
      <div className='container'>
        <h1>Digite o CEP:</h1>
        
      <input type="text"  value={cep} onChange={(e)=>setcep(e.target.value)}/>
      <button onClick={buscarCep}>Buscar</button>
      <p> {endereco}</p>

      </div>
    </div>
  );
}  