import listaPaises from "./validaForm.js";
let paisesAlbum = document.querySelector('#paisesalbum');

function agregarPaisAlAlbum() {

    paisesalbum.innerHTML = ``;
    
    listaPaises.forEach((element,index) => {
      

        paisesalbum.innerHTML += `<tr>
            <td><img class="imgFitMiniatura" src="${element.bandera}" alt="${element.pais}"></td>
            <td>${element.pais}</td>
            <td class="text-center"></td>
            <td class="text-center"><a href="#" id="${element._id}" class="borrar-curso" data-id="1">X</a></td>
          </tr>`;
    });
}

export default paisesAlbum