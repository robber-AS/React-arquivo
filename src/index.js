import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Eventos from './pages/eventos';
import './pages/eventos/index.css';
import Contato from './pages/contato';
import './pages/contato/index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

