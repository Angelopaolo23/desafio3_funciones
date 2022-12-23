var color = "";

userMessage = () => alert('Para comenzar debes seleccionar un color, esto puedes realizarlo presionando la tecla "a", "s" o "d" y luego clickear cualquiera de los recuadros para comenzar a pintarlos segun el color seleccionado.')

document.addEventListener("keydown", function (event){
    if (event.key === "a" || event.key === "A") {
        color = "gold";
    } else if (event.key === "s" || event.key === "S") {
        color = "pink";
    } else if (event.key === "d" || event.key === "D") {
        color = "aquamarine";
    }
})

document.addEventListener("click",function(event) {
    document.querySelector(`#${event.target.id}`).style.backgroundColor = color
})

userMessage()

