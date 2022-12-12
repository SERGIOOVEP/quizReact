
//CREAMOS UNA FUNCIÓN PARA GUARDAR TODO TIPO DE DATOS EN EL LOCAL STORAGE.
const GuardarEnStorage = (clave, elemento) => {

    //CONSEGUIMOS LO QUE TENEMOS GUARDADO EN EL LOCAL
    let elementos = JSON.parse(localStorage.getItem(clave))

    //COMPROBAMOS SI LO QUE TRAEMOS DEL LOCAL ES UN ARRAY.SI LO ES HACEMOS PUSH Y SI NO LO CREAMOS.
    if (Array.isArray(elementos)) {
        elementos.push(elemento)
    } else {
        elementos = [elemento]
    }

    //GUARDAMOS EN EL LOCAL DE NUEVO
    localStorage.setItem(clave, JSON.stringify(elementos))



    return elemento;

}

export default GuardarEnStorage
