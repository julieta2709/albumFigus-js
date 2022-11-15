import validaForm from "./utilities/validaForm.js";


const formulario = document.querySelector('#formulario');
const paisesalbum = document.querySelector('#paisesalbum');

const mostrarDatos = (figuritas,pais) => {
   
    const figIngresadas = document.createElement('td');
    figIngresadas.innerHTML = `${figuritas}`;

    const paisIngresado = document.createElement('td');
    paisIngresado.innerHTML = `pais`;

    const printData = document.createElement('tr');
    printData.appendChild(figIngresadas);
    paisesalbum.appendChild(printData);

    
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