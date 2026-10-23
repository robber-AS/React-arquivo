
import './index.scss';

export default function Cabecalho(props) {
    return (
        <header
            className="comp-cabecalho"
            style={{ backgroundColor: props.cor, color: props.corTexto }}
        >
            <h1>{props.titulo ?? "React Estudos"}</h1>
        </header>
    )

}
