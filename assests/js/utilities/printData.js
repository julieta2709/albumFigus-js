import buscarPais from './buscarPais.js';
import myJson from '../paises.json'assert {type: 'json'};
import siEstanEnStorage from './siEstanEnStorage.js';



let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');

let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("paises")) || [];

const printData = (object) => {
    object.forEach((element) => {
        const {_id,pais,bandera} = element
        insertDOMcontent.innerHTML += `<div class="col-md-3">
    <div class="card mb-4">
    <img class="imgpais" src="${element.bandera}" class="card-img-top" alt="${element.pais}">
    <div class="card-body">
      <h5 class="card-title">${element.pais}</h5>
      <p class="card-text">Ingrese la cantidad de figuritas que tiene de este país.</p>
      <div class="mb-3">
            <input type="number" name="figuritas" id="figuritas" placeholder="Cantidad de figuritas" class="form-control">
        </div>
      <a href="#" class="btn btn-secondary agregar-album" id="${element._id}">Agregar al album</a>
    </div>
  </div>
  </div>`;
    });

    let buttonCard = document.querySelectorAll('#insertDOMcontent .card a');

    buttonCard.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.id;
            siEstanEnStorage( id, obtenerDesdeElStorage,'addClass')
            buscarPais(id, myJson);
        });
    }); 
}

export default printData;