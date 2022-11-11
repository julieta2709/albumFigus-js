import printData from './utilities/printData.js';
import agregarPaisAlCarro from './utilities/agregarPaisAlCarro.js';
import sincronizarConLocalStorage from './utilities/sincronizarConLocalStorage.js';
import myJson from './paises.json' assert {type: 'json'};
import siEstanEnStorage from './utilities/siEstanEnStorage.js'


let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');
/* let paisesSeleccionados = []; */

/* document.addEventListener('DOMContentLoaded', () => {
    paisesSeleccionados = JSON.parse(localStorage.getItem("paises")) || []
    agregarPaisAlCarro()
}) */


/* let imgalbum = document.querySelector('#img-album'); */

/* imgalbum.addEventListener('click', (e)=>{
    e.preventDefault()
    let carrito = document.querySelector('#album')
    let table = document.querySelector('#album table.table')
    let botonCarrito = document.querySelector('#vaciarAlbum')
}) */

document.addEventListener("DOMContentLoaded", () => {


    let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("paises")) || [];
    let id = []

    obtenerDesdeElStorage.forEach(element => {
        id.push(element._id)
    });

    agregarPaisAlCarro(obtenerDesdeElStorage);
    sincronizarConLocalStorage(obtenerDesdeElStorage);
    printData(myJson);
    siEstanEnStorage(id, obtenerDesdeElStorage, 'DOMContentLoaded');
});