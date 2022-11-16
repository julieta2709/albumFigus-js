import validaForm from "./utilities/validaForm.js";


const formulario = document.querySelector('#formulario');
const paisesalbum = document.querySelector('#paisesalbum');

const mostrarDatos = (figuritas, pais) => {

    paisesalbum.innerHTML += `<tr>
    <td><img class="imgFitMiniatura" src="" alt="">Imagen</td>
    <td class="text-center">${figuritas}</td>    
    <td>${pais}</td>
    <td class="text-center"></td>
    <td class="text-center"><a href="#" title="" class="borrar-curso" data-id="1"></td>
    </tr>`;

}


const cargarForm = (e) => {

    e.preventDefault();

    const pais = document.querySelector('#pais').value
    const figuritas = document.querySelector('.form-check-input:checked').value
    mostrarDatos(pais, figuritas);

}

window.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', cargarForm);
})