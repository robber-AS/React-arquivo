import './index.scss';





export default function Eventos (){

      function Alterou(e){
        let novovalor = e.target.value;
        alert("Você alterou o valor do input" + " " + novovalor );
        
      }

      function Passou(){
        alert("Passou o Mouse Sobre ");
      }
        
    
    return(

       

        <div className='Pagina-Eventos  pagina '>
            <div className="container">

        <h2>Entendendo eventos</h2>

        <p onMouseMove={Passou}  >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus sed ad adipisci architecto fuga nam ut saepe
          necessitatibus ab nostrum omnis, repellat fugit alias
          praesentium expedita minus culpa cupiditate numquam?
        </p>

        <input  onChange={Alterou}  type="text"   placeholder="Digite aqui alguma coisa"
        />

        <select  onChange={Alterou} >
          <option >Selecione</option>
          <option  >Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>

        <div className="opcoes">

          <label>
            <input type="radio" name="opcao" />
            Opção 1
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 2
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 3
          </label>

          <label>
            <input type="radio" name="opcao" />
            Opção 4
          </label>

        </div>

        <button >Clique aqui</button>

      </div>

    </div>
    
    );
}