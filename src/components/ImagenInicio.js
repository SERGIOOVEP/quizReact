import React from 'react';
import TitulosTarjetas from './Titulos';


function ImagenInicio(props) {
    return (
        <div className='principal' onClick={() => props.setMostrarPreguntas(true)}>
            <img src="https://www.formacionacadef.es/wp-content/uploads/2020/10/Psicologia-del-deporte.jpg" alt='imagenPrincipal' className='logo'/>
            <TitulosTarjetas TituloTarjeta1="Responda a 10 preguntas en menos de 40 segundos" />
        </div>
    )
}
export default ImagenInicio;