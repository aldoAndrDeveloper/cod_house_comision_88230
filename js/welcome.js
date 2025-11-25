 


/*
este fue el código que usé para la primer pre entrega, ya no se necesita
let datosUsuario = [];

menuBienvenida();


function menuBienvenida (){
    let opcion = prompt("Elige una opción escribiendo el número: \n1) Iniciar Sesión. \n2) Crear cuenta \n3)Salir");
    switch (opcion){
    case '1':
        alert("Inicia sesión");
        iniciaSesión();
        break;
    case '2':
        alert("Crear una cuenta");
        crearCuenta();
        break;
    case '3':
        console.log("Saliendo...");
        return;
        break;
    default:
        alert("Opción no valida");
        menuBienvenida();
        break;
    }
}


function iniciaSesión(){

    let intentos = 0;
    while(intentos <= 3){

        //el primer prompt pedirá el usuario
        let usuario = prompt("Ingresa tu usuario:");
        let contrasenia;
        //si se presiona cancel retornaría un null
        if(usuario === null){
            menuBienvenida();
            return; //el return vi que era para cerrar por completo este prompt que estaba abierto y terminar el proceso
        }else {
            //si no fue cancel la opción entonces pide la contraseña
            contrasenia = prompt ("Ingresa tu contraseña:");
            if(contrasenia === null) {
                //lo mismo, si presiona cancel lanza de nuevo el menú y termina este prompt
                menuBienvenida();
                return;
            }
            
            //valida el usuario previamente registrado
            if(usuario === datosUsuario[1] && contrasenia === datosUsuario[2]){
                alert("Bienvenido "+datosUsuario[0]);
                return;
            }else
            {
                intentos++;
                if(intentos === 2){
                    //si el intento es 1 se dice en singular 
                    alert("usuario y/o contraseña no válidos te quedan "+(3-intentos)+" intento");
                }else{
                    //si no se habla en plutral
                alert("usuario y/o contraseña no válidos te quedan "+(3-intentos)+" intentos");
                }
                //si el intento es el tercero se bloquea el usuario y se termina el proceso 
                if(intentos === 3){
                    alert("Usuario Bloqueado");
                    break;
                }
            }
        }
    }
}

function crearCuenta(){
    datosUsuario[0] = prompt("Ingresa tu Nombre: ");
    datosUsuario[1] = prompt("Ingresa tu correo: ");
    datosUsuario[2] = prompt("Ingresa una contraseña: ");
    confirmar();
}

function confirmar(){

    let confirmar = confirm("Tus datos son: \nNombre: " +datosUsuario[0]+ "\nCorreo: "+datosUsuario[1]);
    
    if(confirmar){
        console.log("El usuario aceptó sus datos")
        menuBienvenida();
    }
}
    */