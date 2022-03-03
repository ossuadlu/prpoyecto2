// consumo(traer datos) de appi desde un cliente js

const URI="https://api.spotify.com/v1/artists/4N5fp4zhTsVITZTVfsXpc2/top-tracks?market=US" 
const TOKEN= "Bearer BQCRq7Vef7nFodFqu-SlAh3vDhGODKMKTG9DjYbCyNCufNKd3gqvlN3O7eA-t68Citi-jL5J7mDKd_pJ2wKedzfD2jWYw2ImgJzyBlANpez07ZH5VFnr-26SWVt27soeL5uk_6pOfCbNdQFHJCJ6levF9noDjdE"

// los parametros siempre seran un objeto
//1. method
//2.headers
//3.body
const PARAMETROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//ir a tocar la puerta al server

fetch(URI,PARAMETROS_PETICION)
.then(function(respuesta){ // verificar el formatojson de la respuesta
    return(respuesta.json())
})
.then(function(respuesta){ //hago lo que necesite con la respuesta
    pintarCanciones(respuesta.tracks)
})
.catch(function(respuesta){ // mostrar el mensaje de error  de la respuesta
    console.log("UPS... "+ respuesta)
})

//**************/
// funcion pintar
//funcion encargada de recoger los datos y pintarlos en pantalla

function pintarCanciones(canciones){
    console.log("estamos pintando....")
    console.log(canciones)
}





