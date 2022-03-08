export function pintarCanciones(resultado){

    resultado.tracks.forEach(function (cancion){ 
        
      
       
        let columna=document.createElement("div")
            
            columna.classList.add("col")
        
            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")
    
            let imagen = document.createElement("img")
            imagen.classList.add("card-img-top")
            imagen.classList.add("h-100")
            imagen.classList.add("p-3")
            imagen.src=cancion.album.images[0].url
    
            let separador = document.createElement("hr")
            separador.classList.add("w-50")
            separador.classList.add("mx-auto")
            separador.classList.add("d-block")
    
            let cuadroTexto = document.createElement("div")
            cuadroTexto.classList.add("px-3")
            cuadroTexto.classList.add("text-center")
        
            let nombreCancion = document.createElement("h4")
            nombreCancion.textContent=cancion.name
    
            let direccionCancion = document.createElement("audio")
            direccionCancion.src=cancion.preview_url
            direccionCancion.setAttribute("controls","controls")
    
    
            cuadroTexto.appendChild(nombreCancion)
            cuadroTexto.appendChild(direccionCancion)
        
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(separador)
            tarjeta.appendChild(cuadroTexto)
            
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
    
    }) 




}