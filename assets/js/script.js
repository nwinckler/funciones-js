// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función (1 Punto).

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


function pintar(elemento, colorear='green'){
    elemento.style.backgroundColor = colorear;
}

const ele = document.getElementById("ele1");
ele.addEventListener('click', function(){
    //pintar(ele); Sin argumento color pinta verde
    pintar(ele, 'yellow'); //con argumento color pinta amarillo
});