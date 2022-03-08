import {URI,PARAMETROS_PETICION} from'./constantes.js'
//funcion para consumir apis (datos) de cualquier servidor con Js puro de forma asincrona

 async function consumirApi(){
    let respuesta= await fetch(URI,PARAMETROS_PETICION)
    let canciones=respuesta.json()
    return (canciones)

}

export let resultado= await consumirApi()
