import { useState } from "react";
import "./index.scss"

export default function Evento1() {

    const [titulo1, settitulo1] = useState("")
    const [titulo2, settitulo2] = useState(false)
    const [titulo3, settitulo3] = useState("oi333333")

    const [descricao, setdescricao] = useState(" ")


    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [resp, setresp] = useState("")

    const [corFundo, setcorFundo] = useState("#00ffff")


    function alterarCorFundo(e) {
        let novovalor = e.target.value;
        setcorFundo(novovalor);

    }


    function alterartitulo1(e) {
        let novovalor = e.target.value;
        settitulo1(novovalor);

    }

    function alterartitulo2(e) {
        let novovalor = e.target.checked;
        settitulo2(novovalor);

    }


    function alterartitulo3(e) {
        let novovalor = e.target.value;
        settitulo3(novovalor);

    }


    function alterardescricao(e) {

        setdescricao(titulo3);

    }

    function capnum1(e) {

        let novovalor = e.target.value;
        setnum1(novovalor);

    }
    function capnum2(e) {

        let novovalor = e.target.value;
        setnum2(novovalor);

    }

    function somar() {
        let soma = Number(num1) + Number(num2)
        setresp(soma);

    }







    return (

        <div className="ex01"  style={{backgroundColor:corFundo}}>
            <section className="section">
                <h2>A cor selecionada e {corFundo}</h2>
                <input type="color" value={corFundo} onChange={alterarCorFundo}/>
            </section>

            <section className="section">
                <h2>{titulo1}</h2>
                <input type="text" onChange={alterartitulo1} />

            </section>

            <hr />

            <section className="section">
                <div className="b">

                    <h2>{descricao}</h2>
                    <input type="text" onChange={alterartitulo3} />
                    <button onClick={alterardescricao}>Enviar</button>
                </div>

            </section>


            <section className="section">
                <div className="c">

                    <h2>Calculadora</h2>

                    <div className="inputs">

                        <input type="number" value={num1} onChange={(e)=>setnum1(e.target.value)} />
                        <input type="number" value={num2} onChange={(e)=>setnum2(e.target.value)} />
                        <div>=</div>
                        <input type="text" value={resp}  />
                    </div>
                    <button onClick={somar} >Calcular</button>
                </div>

            </section>


            <section className="section">
                <h2>Programar e Top ? {titulo2 ? "Sim":"Nao"} </h2>
                <input type="checkbox" onChange={alterartitulo2}/>
            </section>

        </div>

    );
}



