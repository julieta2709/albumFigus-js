import agregarPaisAlCarro from "./agregarPaisAlCarro.js";


let paisesAcumulados = []

const buscarPais = (idPais, buscarPaises) => {
    let paisSeleccionado = buscarPaises.find((element) => idPais === element._id);
   
    let pais = [];
    pais.push(paisSeleccionado);
    let paisesDelStorage = JSON.parse(localStorage.getItem("paises")) || [];
    paisesAcumulados = [...paisesDelStorage, ...pais]
    agregarPaisAlCarro(paisesAcumulados);

};

export default buscarPais;