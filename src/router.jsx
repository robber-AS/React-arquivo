import Eventos from "./pages/eventos";
import "./pages/eventos/index.scss";
import Contato from "./pages/contato";
import "./pages/contato/index.scss";
import Varestado from "./pages/varestado";
import "./pages/varestado/index.scss";
import "./index.scss";
import Contador from "./pages/contador";
import "./pages/contador/index.scss";
import CadastroFuncionario from "./pages/usuario";
import "./pages/usuario/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Ingressos from "./pages/ingressos";



export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/varestado" element={<Varestado />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/usuario" element={<CadastroFuncionario />} />
        <Route path="/ingressos" element={<Ingressos />} />
      </Routes>
    </BrowserRouter>
  );
}
