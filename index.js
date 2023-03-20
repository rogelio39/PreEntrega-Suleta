
//se crea la clase usuario para que cada usuario que se cree lo haga bajo estos parametros.
class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}

//se crea la variable para la creacion de un nuevo usuario

let usuarioNuevo

//funcion que chequea si los datos ingresados para la creacion de un nuevo usuario coinciden al momento de ingresar a la cuenta. Si coinciden te da la bienvenida y sino te da usuario incorrecto y te pide ingresar nuevamente los datos.
function checkUser() {

    checkNombre = prompt("Ingrese nombre de usuario")
    checkEmail = prompt("ingrese email: ")
    checkPass = prompt("ingrese contraseña: ")


    //Se agrega bucle while para que no te permita salir del mismo hasta ingresar un usuario correcto. 

    while (usuarioNuevo.nombre !== checkNombre && usuarioNuevo.email !== checkEmail && usuarioNuevo.contraseña !== checkPass) {
        alert("Usuario incorrecto. Por favor intente nuevamente")
        checkNombre = prompt("Ingrese nombre de usuario")
        checkEmail = prompt("ingrese email: ")
        checkPass = prompt("ingrese contraseña: ")
    }
    return true;
}


//variable para preguntarle al usuario si desea crearse un usuario o continuar sin usuario

let registro = prompt("Desea crearse un usuario?");

//se agrega un condicional para que si el usuario decide crearse un usuario te solicite los datos, sino se sale y puedes continuar en la pagina sin usuario.

if (registro === "no") {
    registro = prompt("Esta bien, puede continuar sin un usuario ");
} else if (registro === "si") {
    const nombre = prompt("Ingrese nombre de usuario")
    const email = prompt("ingrese email: ")
    const contraseña = prompt("ingrese contraseña: ")


    //se crea un nuevo usuario

    usuarioNuevo = new Usuario(nombre, email, contraseña);
    alert("Usuario creado con exito.")
    alert("Ingrese ahora su cuenta")

    //se llama a la funcion checkUser
    checkUser();

    alert(`Bienvenido a poesia nocturna, tu nombre de usuario es ${usuarioNuevo.nombre} y el email con el que te creaste la cuenta ${usuarioNuevo.email} `)
} else {
    alert("Entrada invalida")
}




