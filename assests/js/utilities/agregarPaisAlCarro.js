import sincronizarConLocalStorage from './sincronizarConLocalStorage.js';
import siEstanEnStorage from './siEstanEnStorage.js';

let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');

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
</tr>`;
    });

    let buttonDelete = document.querySelectorAll('#listapaises tr td a');
    let buttonDeleteAll = document.querySelector('#vaciarAlbum');
    buttonDelete.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.id;
            paisesSeleccionados = paisesSeleccionados.filter(pais => pais._id !== id);

            let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("paises")) || [];
            agregarPaisAlCarro(paisesSeleccionados)
            siEstanEnStorage(id, obtenerDesdeElStorage, 'removeClass')
        });
    });

    buttonDeleteAll.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro de vaciar el álbum?',
            showCancelButton: true,
            confirmButtonText: 'vaciar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Vacío!',
                    text: 'Tu álbum está vacío.',
                    icon: 'success'
                })
                localStorage.clear();
                location.reload();
            }
        })

    })

    sincronizarConLocalStorage(paisesSeleccionados);
}

export default agregarPaisAlCarro;