// Crea una página junto a un script que guarde dentro de una variable global
// un color dependiendo de la letra del teclado presionada. (2 Puntos).
// ○ La letra a guardará el color rosado.
// ○ La letra s guardará el color naranjo.
// ○ La letra d guardará el color celeste.
// ○ Para guardar el color revisa el tip al final del enunciado.
// ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
// color blanco y borde negro.
// ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
// “key” a rosado, naranjo o celeste respectivamente.


// Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
// deberá crear un div nuevo de las mismas dimensiones antes mencionadas
// con los colores morado, gris y café respectivamente. (1 Punto)



const contenedor = document.getElementById("contenedor");
const elemento = document.getElementById("key");

document.addEventListener('keydown', function (event){
    if (event.key === 'a' || event.key === 'A'){
        elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S'){
        elemento.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D'){
        elemento.style.backgroundColor = 'lightblue';
    } else if(event.key === 'q' || event.key === 'Q'){
        nuevoElemento = document.createElement("div");
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        nuevoElemento.style.border = 'solid 1px black';
        nuevoElemento.style.backgroundColor = 'purple';
        contenedor.appendChild(nuevoElemento);
    } else if(event.key === 'w' || event.key === 'W'){
        nuevoElemento = document.createElement("div");
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        nuevoElemento.style.border = 'solid 1px black';
        nuevoElemento.style.backgroundColor = 'grey';
        contenedor.appendChild(nuevoElemento);
    } else if(event.key === 'e' || event.key === 'E'){
        nuevoElemento = document.createElement("div");
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        nuevoElemento.style.border = 'solid 1px black';
        nuevoElemento.style.backgroundColor = 'brown';
        contenedor.appendChild(nuevoElemento);
    } else{

    }
    })
    