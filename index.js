
//se crea la clase usuario para que cada usuario que se cree lo haga bajo estos parametros.
class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}

const users = [];

let usuarioNuevo1 = new Usuario("Juan", "Galvan", "juan123456");
let usuarioNuevo2 = new Usuario("Pedro", "Pascal", "pascal171217");

users.push(usuarioNuevo1, usuarioNuevo2);


//se crea la variable para la creacion de un nuevo usuario

let usuarioNuevo3

//funcion que chequea si los datos ingresados para la creacion de un nuevo usuario coinciden al momento de ingresar a la cuenta. Si coinciden te da la bienvenida y sino te da usuario incorrecto y te pide ingresar nuevamente los datos.

function checkUser() {

    const checkNombre = prompt("Ingrese nombre de usuario")
    const checkEmail = prompt("ingrese email: ")
    const checkPass = prompt("ingrese contraseña: ")


    //Se agrega bucle while para que no te permita salir del mismo hasta ingresar un usuario correcto. 

    while (usuarioNuevo3.nombre !== checkNombre && usuarioNuevo3.email !== checkEmail && usuarioNuevo3.contraseña !== checkPass) {
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
    if (usuarioNuevo1.includes(nombre) || usuarioNuevo2.includes(nombre)) {
        alert("Nombre de usuario no disponible")
    }
    const email = prompt("ingrese email: ")
    if (usuarioNuevo1.includes(email) || usuarioNuevo2.includes(email)) {
        alert("Ya existe una cuenta con ese email. Por favor ingrese otro o recupere su cuenta")
    }

    const contraseña = prompt("ingrese contraseña: ")

    while (contraseña.length < 8) {
        alert("Contraseña demasiado corta. Por favor ingrese una contraseña mas larga");
        contraseña = prompt("ingrese contraseña: ");
    }


    //se crea un nuevo usuario

    usuarioNuevo3 = new Usuario(nombre, email, contraseña);

    alert("Usuario creado con exito.")
    alert("Ingrese ahora su cuenta")

    //se llama a la funcion checkUsersi
    checkUser();

    users.push(usuarioNuevo3)

    alert(`Bienvenido a poesia nocturna, tu nombre de usuario es "${usuarioNuevo3.nombre}" y el email con el que te creaste la cuenta "${usuarioNuevo3.email}" `)
} else {
    alert("Entrada invalida")
}

for (const usuario of users){
    console.log(usuario.nombre, usuario.email);
}














