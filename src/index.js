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

      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

