//SEGUNDA PREENTREGA TORNEO DE PADLE

//CLASES

class Equipo{

    constructor(nombre, permiso){
        this.nombre = nombre;
        this.permiso = permiso;

    }
}

class Jugador{

    constructor(nombre, apellido, dni, equipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.equipo = equipo;

    }
}
    
class Partido{
    constructor(equipo, equipo, fecha){
        this.equipo = equipo;
        this.fecha = fecha;

    }
}

//OBJETOS

const equipoUno = new Equipo ("Los Leones", "Permitido");
const equipoDos = new Equipo ("Los Gigantes", "Permitido");
const equipoTres = new Equipo ("Los Amigos", "Permitido");
const equipoCuatro = new Equipo ("El Rejunte", "Bloqueado")

const jugadorPedro = new Jugador ("Pedro", "Pérez", 44777888, "Los Leones");
const jugadorCarlos = new Jugador ("Carlos", "García", 44666888, "Los Leones");
const jugadorJosé = new Jugador ("José", "Sánchez", 44555888, "Los Gigantes");
const jugadorJuan = new Jugador ("Juan", "Molina", 44444888, "Los Gigantes");
const jugadorManuel = new Jugador ("Manuel", "González", 44333888, "Los Amigos");
const jugadorMario = new Jugador ("Mario", "Paz", 442226888, "Los Amigos");
const jugadorAlberto = new Jugador ("Alberto", "Corso", 44111888, "El Rejunte");
const jugadorAdolfo = new Jugador ("Adolfo", "Patiño", 44000888, "El Rejunte");

const partidoUno = new Partido (equipoUno, equipoDos, new Date("February 5, 2023"))
const partidoDos = new Partido (equipoTres, equipoCuatro, new Date("February 5, 2023"))


//Array

const arrayJugadores = [jugadorPedro, jugadorCarlos, jugadorJosé, jugadorJuan, jugadorManuel, jugadorMario, jugadorAlberto, jugadorAdolfo];



//FUNCIONES

//Autorización a jugar si el equipo tiene permiso (Permitido o Bloqueado)

function permisoParaJugar(equipo){
    if(equipo.permiso == "Permitido"){
        return "Autorizado a Jugar";
    }else{
        return "No autorizado a jugar, el equipo pierde el partido";
    }
}

//Funcion para dar de baja y alta a un jugador
function menuAltaBaja(){
    let opcion = parseInt(prompt("Ingrese la opcion: 1 Alta de Jugador 2 Baja de jugador 3 Para salir"));
    return opcion;
}

//Función para dar de Alta a un Jugador

function altaJugador(){
    let nombre = prompt("Ingrese el nombre del jugador a dar de alta: ")
    let apellido = prompt("Ingrese el apellido del jugador a dar de alta: ")
    let dni = prompt("Ingrese el DNI del jugadora dar de alta : ")
    let equipo = prompt("Ingrese el equipo del jugador a dar de alta: ")
    let juagador = new Jugador(nombre, apellido, dni, equipo);
    arrayJugadores.push(jugador);
    console.log(arrayJugadores);

}

//Función para dar de Baja a un Jugador

function bajaJugador(){
    let dni = parseInt(prompt("Ingrese el DNI del jugador a dar de baja: "));
    let jugador = arrayJugadores.find(jugador => jugador.dni===dni);
    let indice = arrayJugadores.indexOf(jugador);
    arrayJugadores.splice(indice,1);
    console.log(arrayJugadores);

}

//Funcion para salir del programa

function salir(){
    alert("Saliste del programa de altas y bajas");

}

// Ejecución del programa

let opcion = menuAltaBaja();

switch(opcion){
    case 1:
        altaJugador();
        break;

    case 2:
        bajaJugador();
        break;

    case 3:
        salir();
        break;
        
    default:
        alert("La opción elegida para Alta o Baja es incorrecta");
        break;    

}