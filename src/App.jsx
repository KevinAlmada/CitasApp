import './assets/index.css'
import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import Header from './components/Header';
function App() {
/* Array de citas */
let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if (!citasIniciales) {
  citasIniciales = [];
}
const [ citas,setCitas] = useState(citasIniciales)
/* use effect para realizar operaciones cuando vambia el state */
useEffect(() => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (citasIniciales) {
    localStorage.setItem('citas',JSON.stringify(citas))
  }else{
    localStorage.setItem('citas',JSON.stringify([]));
  }
}, [citas])
// Funcioin que tome las citas acutales

const crearCita = cita => {
  setCitas([...citas,cita])
}
/* Eliminar cita */
const eliminarCita = id => {
  let newCitas = citas.filter( cita => cita.id !== id)
  setCitas(newCitas)
}
/* Mensaje condicional */
const titulo = citas.length === 0 ?"No hay citas" :"Administrador de citas"
  return (
    <Fragment>
      <Header />
      <h1>Administrador de pacientes </h1>
    <div className="Container">
      <div className="row">
        <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
        </div>
        <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                cita={cita}
                key={cita.id}
                eliminarCita={eliminarCita}
              />
            ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
