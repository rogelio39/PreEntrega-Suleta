

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}


let usuarioNuevo

function checkUser() {

    checkNombre = prompt("Ingrese nombre de usuario")
    checkEmail = prompt("ingrese email: ")
    checkPass = prompt("ingrese contraseña: ")

    while (usuarioNuevo.nombre !== checkNombre && usuarioNuevo.email !== checkEmail && usuarioNuevo.contraseña !== checkPass) {
        alert("Usuario incorrecto. Por favor intente nuevamente")
        checkNombre = prompt("Ingrese nombre de usuario")
        checkEmail = prompt("ingrese email: ")
        checkPass = prompt("ingrese contraseña: ")
    }
    return true;
}

let registro = prompt("Desea crearse un usuario?");

if (registro === "no") {
    registro = prompt("Esta bien, puede continuar sin un usuario ");
} else if (registro === "si") {
    nombre = prompt("Ingrese nombre de usuario")
    email = prompt("ingrese email: ")
    contraseña = prompt("ingrese contraseña: ")

    usuarioNuevo = new Usuario(nombre, email, contraseña);
    alert("Usuario creado con exito.")
    alert("Ingrese ahora su cuenta")

    checkUser();

    alert("Bienvenido a poesia nocturna")
} else {
    alert("Entrada invalida")
}

