// shift+alt+a -->block Comment
// ctrl+k ctrl+c line comment

/* 

window.onload=saludar2;

document.getElementById("123").onmouseover=function(){
posicion("INPUT");
};
document.getElementById("321").onmouseover=function(){
    posicion("PARRAFO");
    };

document.getElementById("btn").onclick = meHicisteClick2; 

function saludar(){
    console.log("Bienvenido");
}

function saludar2(){
    console.log("A Javascript");
}

function retar(){
    console.log("Epa! Salí de arriba mío!");
    }
function posicion(tipo){
    console.log("Estás sobre un...")
    console.log(tipo);
}

function meHicisteClick(){
    console.log("Click ❤");
}

function meHicisteClick2(){
    console.log("🙌 ❤");
} */

let titulos = document.getElementsByName("titulo");
let pes = document.getElementsByTagName("p");
let input = document.getElementById("123");
let boton = document.getElementById("btn");

boton.onclick = function () {

  /* titulos.forEach(e => { //lo que me devuelve "getElementsbyName" puede ser tratado como un array.
    e.style.color = "red";
  });
 */
  titulos.forEach(e => { 
    e.hidden = !e.hidden; //esconde los títulos al presionar el botón.
  });

  for (const e of pes) {
    e.innerHTML = "Egg";
  }

  input.value = "Chiquito";
}

input.onkeydown = function () {
  if (input.value.length > 10) input.value = "Chiquito";

}