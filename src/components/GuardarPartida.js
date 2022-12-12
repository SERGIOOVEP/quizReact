import React, { useState } from "react";
import GuardarStorage from "./GuardarEnStorage";


const GuardarPartida = ({acertadas,setListadoPuntuaciones}) => {



    const [nuevaPuntuacion, setNuevaPuntuacion] = useState({

        usuarioRegistrado: "",
        puntuacion: ""

    })


    const guardarDatosPartida = e => {
        e.preventDefault();

        let usuarioRegistrado = e.target.usuario.value;
        let puntuacion = e.target.puntuacion.value
    


        let partidaGuardada = {
            id: new Date().getTime(),
            usuarioRegistrado,
            puntuacion

        };

        //GUARDAMOS EL ESTADO
        setNuevaPuntuacion(partidaGuardada)
        
     
        //GUARDAMOS EN LOCAL STORAGE
        GuardarStorage("partidas",partidaGuardada)
    }





    return (


        <div className="formulario">
            <p className="tituloGuardar">¿QUIERES GUARDAR TU PARTIDA?</p>
            <form onSubmit={guardarDatosPartida}>
                <p>Nombre de usuario</p>
                <input type="text"
                    name="usuario"
                    className="usuario"
                    placeholder="Introduce tu nombre de usuario" />
                    <p>Puntuación</p>
                <input type="text"
                    name="puntuacion"
                    className="digitosPuntuacion"
                    placeholder="Introduzca puntuación" 
                    value={acertadas}/>
                <input type="submit"
                    className="enviar" />
            </form>
        </div>
    )

}

export default GuardarPartida