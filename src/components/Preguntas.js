import { useState, useEffect } from 'react';
import GuardarPartida from './GuardarPartida';
import ListadoPartidas from './ListadoPartidas';
import ListadoCorrectas from './ListadoCorrectas';


function Preguntas() {

    const [preguntas, setPreguntas] = useState(0)
    const [respuestasPosibles, setRespuestasPosibles] = useState([])
    const [contador, setContador] = useState(-1)
    const [viewResultados, setViewResultados] = useState(false)
    const [acertadas, setAcertadas] = useState(0)
    const [volverInicio, setVolverInicio] = useState(false)
    const [tiempo, setTiempo] = useState(40)




    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
            .then((res) => res.json())
            .then(json => {
                setPreguntas(json.results)
                setContador(0)

            })
    }, [])


    //SI EL TIEMPO ES MAYOR QUE CERO LE RESTAMOS 1 SEGUNDO AL ESTADO SETTIEMPO PARA HACER LA CUENTA ATRÁS.
    //cuenta atrás si queremos formato de hacer 10 segundos por pregunta
    /*
    useEffect(() => {
        const cuentaAtras = setInterval(() => {
            if (tiempo > 0) {
                setTiempo((segundos) => segundos - 1);
            } else if (tiempo === 0) {
                setContador(contador + 1)
                setTiempo(tiempo + 20)
                
            }
        }, 1000);

        return () => clearInterval(cuentaAtras);
    }, [tiempo]);

*/

    useEffect(() => {
        const cuentaAtras = setInterval(() => {
            if (tiempo > 0) {
                setTiempo((segundos) => segundos - 1);
            } else
                setContador(contador + 10)

        }, 1000);

        return () => clearInterval(cuentaAtras);
    }, [tiempo]);


    //SI CONTADOR LLEGA A 10 PREGUNTAS MOSTRAMOS RESULTADOS
    useEffect(() => {
        if (contador === 10) {
            setViewResultados(true)
        }

    }, [contador])


    //SI EXISTE RESULTADOS ES POR QUE LA PARTIDA HA FINALIZADO,ENTONCES EL ESTADO DE INICIO LO PONEMOS EN TRUE
    useEffect(() => {
        if (viewResultados) {
            setVolverInicio(true)
        }

    }, [viewResultados])


    useEffect(() => {
        if (!preguntas || contador >= preguntas.length - 1) return;

        //CREAMOS UN ARRAY VACIO Y VAMOS AÑADIENDO PREGUNTAS PARA PODER DESORDENARLAS Y APLICARLO EN EL RETURN.
        const res = []
        res.push(preguntas[contador].correct_answer);
        res.push(preguntas[contador].incorrect_answers[0]);
        res.push(preguntas[contador].incorrect_answers[1]);
        res.push(preguntas[contador].incorrect_answers[2]);

        res.sort(() => Math.random() - 0.5)

        setRespuestasPosibles(res);

    }, [contador])

   
    const comprobar = (respuesta) => {
        //PREGUNTA QUE MARCAMOS
        console.log(respuesta)
        //PREGUNTA CORRECTA
        var respuestaCorrecta = preguntas[contador].correct_answer        
        console.log(respuestaCorrecta)
        //SI LA PREGUNTA MARCADA ES IGUAL A LA CORRECTA SUMAMOS UNO AL ESTADO DE ACERTADAS Y UNA AL CONTADOR.
        if (respuesta === respuestaCorrecta) {
            setAcertadas(acertadas + 1)

        }
        setContador(contador + 1)
    }





    return (

        <div className='caja-resultado'>
            {preguntas ?
                contador < 10 ?
                    <div className='cuestionario'>
                        <p dangerouslySetInnerHTML={{ __html: preguntas[contador].question }}></p>
                        <div className='tiempo'>Tiempo restante:{tiempo}</div>
                        <ol>
                            <button onClick={(e) => (comprobar(e.target.innerText))}>{respuestasPosibles[0]}</button>
                            <button onClick={(e) => (comprobar(e.target.innerText))}>{respuestasPosibles[1]}</button>
                            <button onClick={(e) => (comprobar(e.target.innerText))}>{respuestasPosibles[2]}</button>
                            <button onClick={(e) => (comprobar(e.target.innerText))}>{respuestasPosibles[3]}</button>
                        </ol>
                    </div>
                    : ""
                : ""}
            {viewResultados ?
                <div className='registro'>
                    <p className='acertadas' name="acertadas">Preguntas acertadas: {acertadas}/10</p>
                    <GuardarPartida acertadas={acertadas} />
                    <ListadoPartidas />
                    
                    
                </div> : ""}


            {volverInicio ?

                <button className='botonInicio' onClick={() => (window.location.href = '/')}>Volver a jugar</button>

                : ""}


        </div>

    )

}

export default Preguntas
