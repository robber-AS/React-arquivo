import './index.scss';
import Cabecalho from "../../componentes/cabecalho";
import axios from 'axios';
import { useState } from 'react';



export default function ChamadaApi() {
    const [cep, setcep] = useState('');
    const [info, setinfo] = useState('');

    async function Chamarcep() {
        let url = 'https://viacep.com.br/ws/' + cep + '/json/';
        let resp = await axios.get(url);
        let dados = resp.data;
        let msg =  dados.cep + ' - ' + dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + ' - ' + dados.uf;
        setinfo(msg);



    }

    return (

        <div className="chamadaApi">
            <Cabecalho titulo="Chamada API" cor="#6570e1" corTexto="white" />
            <div className="container">
                <input type="text" value={cep} onChange={(e) => setcep(e.target.value)} />
                <button onClick={Chamarcep}>Buscar</button>

                <p>{info}</p>

            </div>

        </div>


    );
}