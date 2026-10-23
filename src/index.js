import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Eventos from './pages/eventos';
import './pages/eventos/index.scss';
import Contato from './pages/contato';
import './pages/contato/index.scss';
import Varestado from './pages/varestado';
import './pages/varestado/index.scss';
import Contador from './pages/contador';
import './pages/contador/index.scss';
import CadastroFuncionario from './pages/usuario';
import './pages/usuario/index.scss';
import Ingressos from "./pages/ingressos";
import Evento1 from './pages/ex01';
<<<<<<< HEAD
import ChamadaApi from './pages/ChamadaApi';
import Login from './pages/login';
=======
import ChamadaAPI from './pages/chamadaAPI';
>>>>>>> bc137edc6c814e65bfb6769536381bc60d1522b8
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contato' element={<Contato/>}/>
         <Route path='/eventos' element={<Eventos/>}/>
         <Route path='/varestado' element={<Varestado/>}/>
         <Route path='/contador' element={<Contador/>}/>
         <Route path='/usuario' element={<CadastroFuncionario/>}/>
         <Route path='/ingressos' element={<Ingressos/>}/>
         <Route path='/ex01' element={<Evento1/>}/>
<<<<<<< HEAD
         <Route path='/chamadaapi' element={<ChamadaApi/>}/>
         <Route path='/login' element={<Login/>}/>
=======
         <Route path='/chamadaAPI' element={<ChamadaAPI/>}/>
>>>>>>> bc137edc6c814e65bfb6769536381bc60d1522b8

      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
  
);

