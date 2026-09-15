
import './App.css';
import { Link } from 'react-router-dom';
  
function App() {
  return (
    <div className="App">

      <Link to="/contato"><h2> ir Para Contatos</h2> </Link>
      <Link to="/eventos"><h2> ir Para Eventos</h2> </Link>      
      <Link to="/usuario"><h2> ir Para Cadastro de Funcionário</h2> </Link>
      <Link to="/varestado"><h2> ir Para Variável de Estado</h2> </Link>  
      <Link to="/contador"><h2> ir Para Contador</h2> </Link>

    </div>
   
       
  );
}

export default App;
