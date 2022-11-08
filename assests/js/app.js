import myJson from './paises.json'assert {type: 'json'};


let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');
let paisesSeleccionados = []

document.addEventListener('DOMContentLoaded', () => {
    paisesSeleccionados = JSON.parse(localStorage.getItem('paises')) || []
    agregarPaisAlCarro()
})

const sincronizarConLocalStorage = (paisesSeleccionados) => {
    localStorage.setItem("paises", JSON.stringify(paisesSeleccionados));
};

const printdata = (object) => {
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
  </div>`
    });
}


const agregarPaisAlCarro = (paisesSeleccionados) => {
       listapaises.innerHTML = ``;
    paisesSeleccionados.forEach((element, index) => {
        const {_id,pais,bandera} = element
        listapaises.innerHTML += `<tr>
<td><img class="imgminiatura" src="${element.bandera}" alt="${element.pais}"></td>
<td class="text-center">${element.pais}</td>
<td class="text-center"><a href="#" id="${element._id}" class="sumar-pais" data-id="1">+</a></td>
<p class="text-right">Total: <span id="total"></span>Figuritas</p>
<td class="text-center"><a href="#" id="${element._id}" class="borrar-pais" data-id="1">X</a></td>
</tr>`
    });

    let buttonDelete = document.querySelectorAll('.borrar-pais');
    buttonDelete.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.id;
            paisesSeleccionados = paisesSeleccionados.filter(pais => pais._id !== id);
            agregarPaisAlCarro()
        })
    })

    sincronizarConLocalStorage();
}



function buscarPais(idPais, buscarPaises) {
    let paisSeleccionado = buscarPaises.find(element => idPais == element._id)

    let pais = []
    pais.push(paisSeleccionado)
    paisesSeleccionados = [...paisesSeleccionados, ...pais]
    agregarPaisAlCarro();

}

printdata(myJson)

let buttonCard = document.querySelectorAll('#insertDOMcontent .card a');

buttonCard.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let id = event.target.id;
        buscarPais(id, myJson)
    })
})