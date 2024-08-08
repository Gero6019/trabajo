const lista = []

function agregarNombre(){
    let nombre = document.getElementById("nombre")
    let correo = document.getElementById("correo")

    let persona = {
        nombre: nombre.value,
        correo: correo.value
    }

    lista.push(persona)   
    mostrarLista()
}

function mostrarLista (){
    let salida = document.getElementById("salida")
    salida.innerHTML = ""

    lista.map((elemento,indice)=>{
        salida.innerHTML += `
        <tr>
            <th>${elemento.nombre}</th>
            <th>${elemento.correo}</th>
            <th><button onclick="eliminar(${indice})">Eliminar</button></th>
        </tr>
        `
    })
}

function eliminar(indice){
    lista.splice(indice,1)
    mostrarLista()
}