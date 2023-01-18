// Simulador de tienda online de videojuegos.

// Constructor
class Juegos {
    constructor(id, nombre, precioJuego) {
        this.id = id;
        this.nombre = nombre;
        this.precioJuego = precioJuego;

    }
}

//  Objetos creados a partir del constructor
let minecraft = new Juegos(1, "Minecraft", 500);
let gta5 = new Juegos(2,"Grand Thef Auto 5", 1200);
let lego = new Juegos(3,"LEGO Star Wars: The Skywalker Saga", 3000);
let elden = new Juegos(4, "Elden Ring", 4800);

//Array original que contiene la lista de juegos
const  arrayJuegos = [minecraft, gta5, lego, elden];

// Carrito de comprar al cual se le van a sumar los juegos que se vayan seleccionando.
const carrito = [];
// Variable que permite seleccionar que juego agregar segun su id.
let agregarJuego = 0;


//Funcion que pregunta al usuario la cantidad de copias de un juego que desea adquirir y se asegura que no se ingrese un valor no numerico.
const pregunta1 = (nombre, precio) => {
    let cantidad ="";
    while (isNaN(cantidad) || cantidad === "") {
        cantidad = prompt("Cuantas copias de " + nombre + " quieres adquirir. Su precio es de " + precio);
    }
    parseInt(cantidad) || 0;
    return cantidad;    
}

// Funcion que realiza al usuario 4 preguntas por cada juego disponible.
arrayJuegos.forEach(element => {
    let cantidad = pregunta1(element.nombre, element.precioJuego);
    
    // Bucle que agrega un juego al nuevo array por cada unidad deseada utilizando el valor que se almacena en cantidad.
    for (let index = 0; index < cantidad ; index++) {
        carrito.push(arrayJuegos[agregarJuego]);
        
    }
    // el numero de id de cada juego a agregar se modifica en cada ciclo del forEach
    agregarJuego++;
})

// arrays que contienen la informacion de cada copia del mismo juego
const arrayMinecraft = carrito.filter(juego => juego.id === 1);
const arrayGta5 = carrito.filter(juego => juego.id === 2);
const arrayLego = carrito.filter(juego => juego.id === 3);
const arrayElden = carrito.filter(juego => juego.id === 4);

//Variables que almacenan la cantidad de copias de un mismo juego
 let minecraftUnidades = arrayMinecraft.length;
 let gta5Unidades = arrayGta5.length;
 let legoUnidades = arrayLego.length;
 let eldenUnidades = arrayElden.length;

totales = carrito.reduce((total, actual) => 
    total + actual.precioJuego, 0
);

console.log("total"  + totales)

//Alerta Final que muestra el total de la compra y cuantas unidades se estan llevando por juego
alert("El precio total es de $" + totales + ". Llevas " + (minecraftUnidades || 0) + " " + arrayJuegos[0].nombre + ", " + (gta5Unidades || 0) + " " + arrayJuegos[1].nombre + ", " + (legoUnidades || 0) + " " + arrayJuegos[2].nombre + ", " + (eldenUnidades || 0) + " " + arrayJuegos[3].nombre + ".");
