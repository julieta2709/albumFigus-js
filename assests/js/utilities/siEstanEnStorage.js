const siEstanEnStorage = (id, obtenerDesdeElStorage, type) => {

    if (type === 'DOMContentLoaded') {
        id.forEach((element) => {
            document.getElementById(element).innerText = 'Pais agregado'
            document.getElementById(element).classList.add('paisSeleccionado')
        });
    }

    if (type === 'addClass') {

        let buttonCard = document.querySelectorAll('#insertDOMcontent .card a')
        let arr = []

        if (localStorage.length !== 1) {

            obtenerDesdeElStorage.forEach((element) => {
                arr.push(element._id)
            })

        } else {
            document.getElementById(id).innerText = 'Pais agregado'
            document.getElementById(id).classList.add('paisSeleccionado')
            let cardPadre = document.getElementById(id).parentElement.parentElement.parentElement.parentElement
            cardPadre.classList.add('activo')
        }



        buttonCard.forEach((element, index) => {

            if (element.getAttribute('id') === arr[index]) {
                let cardAdd = document.getElementById(arr[index])
                cardAdd.classList.add('paisSeleccionado')
                cardAdd.innerText = "Pais agregado"
            }
        })
    }

    if (type === 'removeClass') {

        let buttonCard = document.querySelectorAll('#insertDOMcontent .card a')
        let arr = []



        obtenerDesdeElStorage.forEach((element) => {
            arr.push(element.pais)
        })

        buttonCard.forEach((element, index) => {

            if (element.getAttribute('pais') === arr[index]) {
                document.querySelector(`[pais='${arr[index]}']`).classList.remove('paisSeleccionado')
            } else {
                let removeClass = document.querySelector(`[pais='${arr[arr.length-1]}']`)
                let removeClassParent = document.querySelector(`[pais='${arr[arr.length-1]}']`).parentElement.parentElement.parentElement.parentElement
                removeClass.classList.remove('paisSeleccionado')
                removeClassParent.classList.remove('activo')
            }
        })
    }

}

export default siEstanEnStorage