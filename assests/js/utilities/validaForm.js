const validaForm = (e) => {
    e.preventDefault();
    const pais = document.querySelector('#pais').value;
   
    var countChecked = function () {
        
        var n = $("input:checked").length;
                
        if (pais === '' || n != 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes seleccionar el Pais y la cantidad de figuritas',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Excelente',
                text: 'Los datos ingresados son correctos',
            })
        };
    }
        countChecked();
        $("input[type=checkbox]").on("click", countChecked);
       

};
window.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validaForm);
});

export default validaForm