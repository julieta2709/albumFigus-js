import buscarPais from './buscarPais.js';
import myJson from '../paises.json'assert{type: 'json'};
import siEstanEnStorage from './siEstanEnStorage.js';



let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');

let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("paises")) || [];

const printData = (object) => {
  object.forEach((element) => {
    const {
      _id,
      pais,
      bandera
    } = element
    insertDOMcontent.innerHTML += `<div class="col-md-3">
    <div class="card mb-4">
    <img class="imgpais" src="${element.bandera}" class="card-img-top" alt="${element.pais}">
    <div class="card-body">
      <h5 class="card-title">${element.pais}</h5>
      <p class="card-text">Ingrese la cantidad de figuritas que tiene de este país.</p>
      <div class="mb-3">
      <div class="container-flex">
      <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill">
  <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label" for="firstRadio">${element.figuritas[0]}</label>
 </li>
  <li class="list-group-item flex-fill">${element.figuritas[1]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[2]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[3]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[4]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[5]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[6]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[7]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[8]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[9]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[10]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[11]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[12]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[13]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[14]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[15]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[16]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[17]}</li>
  <li class="list-group-item flex-fill">${element.figuritas[18]}</li>
 </ul>
 </div>
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
      siEstanEnStorage(id, obtenerDesdeElStorage, 'addClass')
      buscarPais(id, myJson);
    });
  });
}

export default printData;