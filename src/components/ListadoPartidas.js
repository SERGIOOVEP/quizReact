import React, { useEffect, useState } from "react"

const ListadoPartidas = () => {

    const [listadoPuntuaciones, setListadoPuntuaciones] = useState([]);


    useEffect(() => {

        Conseguirlistado();

    }, []);

    const Conseguirlistado = () => {

        let puntuaciones = JSON.parse(localStorage.getItem("partidas"))

        setListadoPuntuaciones(puntuaciones)

    }



    return (
        <div>
            <div className="tablaResultados">
                <h3 className="fraseTabla">Últimas puntuaciones</h3>
                <table >
                    <tr>
                        <th>Usuario</th>
                        <th>Puntuación</th>
                    </tr>
                    {listadoPuntuaciones !== null ? listadoPuntuaciones.map((partida, i) => {
                        return (
                            <tr key={i}>
                                <td>{partida.usuarioRegistrado}</td>
                                <td>{partida.puntuacion}</td>
                            </tr>
                        )
                    })
                    :<p>"No hay registros de partidas guardadas"</p> 
                }
                </table>
                </div>
        </div>

    )
}


export default ListadoPartidas