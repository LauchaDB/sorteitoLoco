import './App.css';

function Footer(){
  return(
    <footer className='Footer'>
      <p className='Footer-text'>Hecho a mano - DBCODERS - <i class="fa fa-copyright" aria-hidden="true">copyright</i></p>
    </footer>
  )
}

function App() {

  let listaDePartic = new Array();
  let j = 1;

  const agregarPartic = () => {
    let participante = document.getElementById("input");
    if(participante.value){
      listaDePartic.push(participante.value);
      participante.value= "";
    }else{
      alert("¡¡No puede ingresar vacio participante!!");
    }
    
  }

  const mostrarParticipantes = () => {
    let divMostrarPart = document.getElementById("mostrarPart");
    let divTitle = document.getElementById("divTitle"); 
    let lista_ul_Participantes = document.getElementById("listaDeParticipantes");
    let h1Participantes = document.createElement("h1");

    divTitle.innerHTML = "";
    lista_ul_Participantes.innerHTML = "";
   
    if(listaDePartic.length){
      
      h1Participantes.innerHTML = "ESTOS SON LOS PARTICIPANTES: ";
      divTitle.appendChild(h1Participantes);
      for(let i=0; i<listaDePartic.length; i++){
        
        let liParticipante = document.createElement("li");
        liParticipante.className = "li_participante";
        liParticipante.innerHTML = (i+1) + " -- " + listaDePartic[i];
        lista_ul_Participantes.appendChild(liParticipante);
      }
    }else{
      alert("¡DEBE INGRESAR PARTICIPANTES!");
    }

  }

  const sortear = () => {
    
    if(listaDePartic.length){
      let divPartGanador = document.getElementById("partGanador");
      if(j===1){
        let h1Ganadores = document.createElement("h1");
        h1Ganadores.innerHTML = "¡¡ESTOS SON LOS GANADORES!!:";
        divPartGanador.appendChild(h1Ganadores);
      }
      let h2Ganador = document.createElement("h2");
      let numRandom = parseInt(Math.random() * (listaDePartic.length - 0) + 0);

      h2Ganador.className = "h2Ganador";
      h2Ganador.innerHTML = "Ganador "+ j++ + ": " + listaDePartic[numRandom];
      divPartGanador.appendChild(h2Ganador);
      
    }else{
      alert("No se ingreso ningun participante");
    }
  }
 
  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className='App-titleHeader'>
          Bienvenidos al sorteito loco
        </h1>
        

        <div className='GuardadoDePartic'>
          
          <form onSubmit={onSubmit}>
            <label for="input" className='GuardadoDePartic-label'>Nombre del participante: </label>
            <input id='input' type='text' className='GuardadoDePartic-input'/>

            <button className='btnAgregar btnGeneral' onClick={agregarPartic}>
                Agregar
            </button>
          </form>
            
        </div>


        <div className='muestraDePartic'>

            <button className='btnMostrar btnGeneral' onClick={ mostrarParticipantes}>
                Mostrar participantes
            </button>

            <button className='btnSortear btnGeneral' onClick={sortear}>
                SORTEAR
            </button>
        </div>

        <div className='partGanador' id='partGanador'>

        </div>

        <div className='mostrarPart' id='mostrarPart'>

          <div className='divTitle' id='divTitle'>

          </div>

          <ul className='listaDeParticipantes' id='listaDeParticipantes'>

          </ul>
        </div>

        <Footer/>
        
      </header>
    </div>
  );
}

export default App;