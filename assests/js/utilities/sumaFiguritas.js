let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listapaises = document.querySelector('#listapaises');

let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("paises")) || [];


/* function arrayInput(){
    let figIngresadas = new cantFigus();
    let inputsValues = document.querySelector('#figuritas'),
    values = [].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    arrayInput.array.forEach(function(inputvaluedata) {
        console.log(inputvaluedata);
    });
    console.log(figIngresadas);
} */

const figuritas = document.querySelector('#figuritas').value;
const elForm = document.querySelector('#elform').value;
let ingresaFiguritas = [];

agregarAlArray = function (event){
    event.preventDefault();
    ingresaFiguritas.push(figuritas.value);
    console.log(ingresaFiguritas);
    return false;
}
elForm.addEventListener("submit",agregarAlArray,false);

export default arrayInput;