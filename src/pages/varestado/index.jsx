import'./index.scss';
import { useState } from 'react';


  export default function Varestado(){

        const [varestado1,setvarestdo1]=useState('oie');
        const [varestado2,setvarestdo2]=useState('')
         const [varestado3,setvarestdo3]=useState('true')

            function Alterars1 (e){
                   let  novoValor = e.target.value;
                   setvarestdo1 (novoValor);
            }
            function Alterars2 (e){
                   let  novoValor = e.target.value;
                   setvarestdo2 (novoValor);
            }
    return(


        <section  className='pagina-Varestado'>
          
            <div className='container'>
              
            <form>
                <h1>{varestado1} </h1>

                <label> Nome:
                     <input type="text" value={varestado1} /> 
                </label>

                <label> 
                     <input type="text"  onChange={Alterars1}/> 
                </label>
                    <button> Enviar</button>
                
                
                
            </form>
            <br></br>
                <br></br>

                <h2>{varestado2}</h2>
                
                  <select onChange={Alterars2}>
                    <option>Javascript</option>
                    <option>React</option>
                    <option>Java</option>
                  </select>

                <br></br>
                <br></br>
                
                <h2>{}</h2>
                
                  <input type='checkbox' checked={varestado3} é bom/> 
                 

           
            </div>
        </section>

    );
        
  }