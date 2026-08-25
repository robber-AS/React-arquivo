import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Eventos from './pages/eventos';
import './pages/eventos/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Eventos />
  </React.StrictMode>
);

