import React,{Fragment,useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    /* Crear State de Citas */
    const [cita,setCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });
    const [error,setError] = useState(false);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    /* Agregar cita */
    const submitCita = e => {
        e.preventDefault();
        
        //Validar
        if (mascota.trim() ==="" || propietario.trim() ==="" || fecha.trim() ==="" || hora.trim() ==="" || sintomas.trim() ==="") {
            setError(true)
            return;
        }
        setError(false)
        /*Asignar ID */
        cita.id = uuidv4()
        /* Crear cita */
        crearCita(cita)
        /* Reiniciar form */
        setCita({
            mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
        })
    }
    /* EXTARER VALORS */
    const{mascota,propietario,fecha,hora,sintomas}=cita
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>:null}
            <form
            onSubmit={submitCita}
            >
               <label>Nombre Mascota</label> 
               <input 
               type="text"
               name="mascota"
               className="u-full-width"
               placeholder="Nombre Mascota"
               onChange={(e) => handleChange(e)}
               value={mascota}
                />
               <label>Nombre Dueño</label> 
               <input 
               type="text"
               name="propietario"
               className="u-full-width"
               placeholder="Nombre Dueño de la mascota"
               onChange={(e) => handleChange(e)}
               value={propietario}
                />
               <label>Fecha</label> 
               <input 
               type="date"
               name="fecha"
               className="u-full-width"
               onChange={(e) => handleChange(e)}
               value={fecha}
                />
               <label>Hora</label> 
               <input 
               type="time"
               name="hora"
               className="u-full-width"
               onChange={(e) => handleChange(e)}
               value={hora}
                />
               <label>Síntomas</label> 
               <textarea name="sintomas" className="u-full-width" onChange={(e) => handleChange(e)} value={sintomas}>

               </textarea>
               <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita:PropTypes.func.isRequired
}

export default Formulario
