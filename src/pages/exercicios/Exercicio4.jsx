import { useState } from "react";
import "./Exercicio4.scss";

export default function Exercicio4() {
  const [corTexto, setCorTexto] = useState("#000000");
  const [corFundo, setCorFundo] = useState("#ffffff");
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [fonte, setFonte] = useState("Arial");
  const [negrito, setNegrito] = useState(false);
  const [italico, setItalico] = useState(false);
  const [sublinhado, setSublinhado] = useState(false);

  const estiloTexto = {
    color: corTexto,
    backgroundColor: corFundo,
    fontSize: `${tamanhoFonte}px`,
    fontFamily: fonte,
    fontWeight: negrito ? "bold" : "normal",
    fontStyle: italico ? "italic" : "normal",
    textDecoration: sublinhado ? "underline" : "none",
    padding: "20px",
    minHeight: "100px",
    border: "1px solid #ccc",
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box"
  };

  return (
    <div className="exercicio4">
      <h2>Exercício 4: Personalizador de Texto</h2>
      <div className="controles">
        <div className="grupo">
          <label>Cor do Texto:
            <input type="color" value={corTexto} onChange={(e) => setCorTexto(e.target.value)} />
          </label>
          <label>Cor de Fundo:
            <input type="color" value={corFundo} onChange={(e) => setCorFundo(e.target.value)} />
          </label>
        </div>
        <div className="grupo">
          <label>Tamanho: {tamanhoFonte}px
            <input
              type="range"
              min="10"
              max="48"
              value={tamanhoFonte}
              onChange={(e) => setTamanhoFonte(Number(e.target.value))}
            />
          </label>
          <label>Fonte:
            <select value={fonte} onChange={(e) => setFonte(e.target.value)}>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Verdana">Verdana</option>
              <option value="Courier New">Courier New</option>
              <option value="Times New Roman">Times New Roman</option>
            </select>
          </label>
        </div>
        <div className="grupo checkboxes">
          <label><input type="checkbox" checked={negrito} onChange={(e) => setNegrito(e.target.checked)} /> Negrito</label>
          <label><input type="checkbox" checked={italico} onChange={(e) => setItalico(e.target.checked)} /> Itálico</label>
          <label><input type="checkbox" checked={sublinhado} onChange={(e) => setSublinhado(e.target.checked)} /> Sublinhado</label>
        </div>
      </div>
      <div className="preview">
        <h3>Pré-visualização:</h3>
        <div style={estiloTexto} contentEditable suppressContentEditableWarning>
          Texto personalizável - edite-me!
        </div>
      </div>
    </div>
  );
}