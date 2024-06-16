//Dentro del script agrega el evento para que al hacer click a cada uno de los
//divs, este cambie de color al color negro. Utiliza addEventListener para
//agregar el evento

function pintarNegro(elemento){
    elemento.style.backgroundColor = 'black';
}


let elemento1 = document.querySelector("#div1");
let elemento2 = document.querySelector("#div2");
let elemento3 = document.querySelector("#div3");
let elemento4 = document.querySelector("#div4");

elemento1.addEventListener("click", function(){
    pintarNegro(elemento1);
})
elemento2.addEventListener("click", function(){
    pintarNegro(elemento2);
})
elemento3.addEventListener("click", function(){
    pintarNegro(elemento3);
})
elemento4.addEventListener("click", function(){
    pintarNegro(elemento4);
})
