import React, { useEffect, useState } from "react"

const ListadoCorrectas = () => {

    const [correctas, setCorrectas] = useState([]);


    useEffect(() => {

        ConseguirCorrectas();

    }, []);

    const ConseguirCorrectas = () => {

        let preCorrectas =

        setCorrectas(preCorrectas)

    }



    return (
        <div>
            <div>
                <table >
                    <tr>
                        <th>Usuario</th>
                    </tr>
                    {correctas !== null ? correctas.map((correctas, i) => {
                        return (
                            <tr key={i}>
                                <td>{correctas}</td>
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


export default ListadoCorrectas