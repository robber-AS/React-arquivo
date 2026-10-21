<<<<<<< HEAD
import './index.scss'

export default function Cabecalho (){
    return(
        <div className='Comp-cabecalho'>
            <h1>React Titulo</h1>
        </div>


    );
=======
import './index.scss';

export default function Cabecalho(props) {
    return (
        <header className="comp-cabecalho">
            <h1>{props.titulo ?? "React Estudos"}</h1>
        </header>
    )
>>>>>>> 754cbaf22a725eb6a95d134195a452b346ecf879
}