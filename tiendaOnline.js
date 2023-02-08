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
//localStorage.setItem(arrayStorage, JSON.stringify(arrayJuegos))

// Carrito de comprar al cual se le van a sumar los juegos que se vayan seleccionando.
const carrito = [];
// Variable que permite seleccionar que juego agregar segun su id.
let agregarJuego = 0;

const catalogoProductos = document.querySelector("#contenedorProductos");

//funcion que carga los productos disponibles haciendo uso del DOM 
function cargarProductos() {
    arrayJuegos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
            <h3>${producto.nombre} $${producto.precioJuego}</h3>
            <button class = "agregar" id = "agregar${producto.id}">Agregar</button>
            <button class = "eliminar" id = "eliminar${producto.id}">Eliminar</button>
        `
        catalogoProductos.append(div);
    } )
} 

cargarProductos();

// arrays que contienen la informacion de cada copia del mismo juego en la sesion
const arrayMinecraft = [];
const arrayGta5 = [];
const arrayLego = [];
const arrayElden = [];

localStorage.setItem("arrayMinecraftStorage", JSON.stringify(arrayMinecraft));
localStorage.setItem("arrayGta5Storage", JSON.stringify(arrayGta5));
localStorage.setItem("arrayLegoStorage", JSON.stringify(arrayLego));
localStorage.setItem("arrayEldenStorage", JSON.stringify(arrayElden));


const botonAgregar = document.querySelectorAll(".agregar");
const botonQuitar = document.querySelectorAll(".eliminar");

// AGREGAR AL CARRITO
function funcionAgregar() {
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    console.log(idBoton);
    if (idBoton === "agregar1") {
        let arrayPush1 = JSON.parse(localStorage.getItem("arrayMinecraftStorage"));
        arrayPush1.push(arrayJuegos[0]);
        localStorage.setItem("arrayMinecraftStorage", JSON.stringify(arrayPush1));
        let aumentar = JSON.parse(localStorage.getItem("minecraftUnidadesStorage"))
        aumentar++;
        localStorage.setItem("minecraftUnidadesStorage", JSON.stringify(aumentar));
    }
    else if (idBoton === "agregar2"){
        let arrayPush2 = JSON.parse(localStorage.getItem("arrayGta5Storage"));
        arrayPush2.push(arrayJuegos[1]);
        localStorage.setItem("arrayGta5Storage", JSON.stringify(arrayPush2));
        let aumento = JSON.parse(localStorage.getItem("gta5UnidadesStorage"))
        aumento++;
        localStorage.setItem("gta5UnidadesStorage", JSON.stringify(aumento));
        

    }
    else if (idBoton === "agregar3"){
        let arrayPush3 = JSON.parse(localStorage.getItem("arrayLegoStorage"));
        arrayPush3.push(arrayJuegos[2]);
        localStorage.setItem("arrayLegoStorage", JSON.stringify(arrayPush3));
        let aumentar = JSON.parse(localStorage.getItem("legoUnidadesStorage"))
        aumentar++;
        localStorage.setItem("legoUnidadesStorage", JSON.stringify(aumentar));
    }
    else if (idBoton === "agregar4"){
        let arrayPush4 = JSON.parse(localStorage.getItem("arrayEldenStorage"));
        arrayPush4.push(arrayJuegos[3]);
        localStorage.setItem("arrayEldenStorage", JSON.stringify(arrayPush4));
        let aumentar = JSON.parse(localStorage.getItem("eldenUnidadesStorage"))
        aumentar++;
        localStorage.setItem("eldenUnidadesStorage", JSON.stringify(aumentar));
    }
}

/////// QUITAR DEL CARRITO
function funcionQuitar() {
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", quitarDelCarrito)
    });
}

function quitarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    console.log(idBoton);
    if (idBoton === "eliminar1") {
        let reducir = JSON.parse(localStorage.getItem("minecraftUnidadesStorage"))
        reducir--;
        localStorage.setItem("minecraftUnidadesStorage", JSON.stringify(reducir));
    }
    else if (idBoton === "eliminar2"){
        let reducir = JSON.parse(localStorage.getItem("gta5UnidadesStorage"))
        reducir--;
        localStorage.setItem("gta5UnidadesStorage", JSON.stringify(reducir));
        

    }
    else if (idBoton === "eliminar3"){
        let reducir = JSON.parse(localStorage.getItem("legoUnidadesStorage"))
        reducir--;
        localStorage.setItem("legoUnidadesStorage", JSON.stringify(reducir));
    }
    else if (idBoton === "eliminar4"){
        let reducir = JSON.parse(localStorage.getItem("eldenUnidadesStorage"))
        reducir--;
        localStorage.setItem("eldenUnidadesStorage", JSON.stringify(reducir));
    }
}

funcionAgregar();
funcionQuitar();






minecraftTotal= JSON.parse(localStorage.getItem("minecraftUnidadesStorage")) * 500
legoTotal =  JSON.parse(localStorage.getItem("legoUnidadesStorage")) * 3000;
gta5Total = JSON.parse(localStorage.getItem("gta5UnidadesStorage")) * 1200;
eldenTotal =  JSON.parse(localStorage.getItem("eldenUnidadesStorage")) * 4800;

totales =  minecraftTotal + legoTotal + gta5Total + eldenTotal;

const sumaTotal = document.getElementById(resultado)

function crearResultado(){
    const  div = document.createElement("div")
    div.innerHTML = 
        `<p>El precio total es de $ ${totales}. Llevas ${(minecraftUnidades || 0)} ${arrayJuegos[0].nombre }, ${(gta5Unidades || 0)}, ${arrayJuegos[1].nombre} ${(legoUnidades || 0)}  ${arrayJuegos[2].nombre},  ${(eldenUnidades || 0)} ${arrayJuegos[3].nombre}.</p>`
    sumaTotal.appendChild(div);
}

crearResultado();