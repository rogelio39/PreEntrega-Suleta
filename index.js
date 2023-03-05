

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
    }
}



let usuarioNombre

let usuarioEmail

let usuarioContraseña

let decision 

let creacionUsuario = true

while (creacionUsuario === true) {

    decision = prompt("Desea crearse un usuario?")

    if (decision === "si") {

        usuarioNombre = prompt("Ingrese su nombre de usuario")

        usuarioEmail = prompt("Ingrese email")

        usuarioContraseña = prompt("Ingrese contraseña")

        if (usuarioContraseña.length < 6) {
            usuarioContraseña = prompt("Ingrese una contraseña mas larga")
        } else {
            alert("Usuario creado con exito")
            break
        }

    } else {
        creacionUsuario = false
        break
    }
}



const usuarioNuevo = new Usuario(usuarioNombre, usuarioEmail, usuarioContraseña);

console.log(usuarioNuevo);
