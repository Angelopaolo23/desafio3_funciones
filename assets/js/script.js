
// CODIGO ORIGINAL
/*function pintar() {
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = "yellow";
}
ele = document.getElementById("ele1");
ele.addEventListener("click", pintar)*/


// PASO 3.1
/*pintar = (elemento) => elemento.style.backgroundColor = "yellow";
ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele))
*/

// PASO 3.2

pintar = (elemento, color = "green") => elemento.style.backgroundColor = color;
ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));
