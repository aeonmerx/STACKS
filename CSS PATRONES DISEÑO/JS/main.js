//FUNCIONES INTEGRADAS
// FUNCION 1 BUSCADOR WEB DE PRODUCTOS
function buscador() {
    var input, filter, section, div, h1, i;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    section = document.getElementById("body");
    div = section.getElementsByClassName("row");
    for (i = 0; i < div.length; i++) {
        h1 = div[i].getElementsByClassName("product")[0];
        if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}
//EVENTOS JAVASCRIPT HTML DOM 1. FUNCION ONCLICK
// Event type:	MouseEvent
//  HTML ETIQUETAS SOPORTADAS :	TODAS EXCEPTO: <base>,<bdo>,<br>,<head>,<html>,<iframe>,<meta>,<param>,<script>,<style>, y <title></title>
/* CUANDO LE DAS CLICK A LA PANTALLA SUCEDE ESTO:
OBTIENE ELEMENTOS CON NOMBRE DE ETIQUETA "BODY" 
Y LOS CAMBIA DE ESTILO A EL BACKGROUND O FONDO BLACK/NEGRO)
 Y COLOR DE LETRA WHITE(BLANCA); */
//EJEMPLO1
window.onclick = darClick;
function darClick() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
    document.getElementsByTagName("BODY")[0].style.color = "white";
}
x = document.getElementById('boton');
x.onclick = cambiarTexto;
function cambiarTexto() {

    x.innerHTML = "Nuevo texto";
    x.style.backgroundColor = 'red';
    x.style.width = '100%';
    x.style.fontSize = '100px';
}
//EJEMPLO 2 DEFINIR ONCLICK EN JAVASCRIPT-> CON addEventListener
document.getElementById("demo2").addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("demo2").innerHTML = "YOU CLICKED ME!";
}
// EJEMPLO 3 DEFINIR ONCLICK EN JAVASCRIPT 
document.getElementById("demo3").onclick = function () { myFunction2() };
function myFunction2() {
    document.getElementById("demo3").innerHTML = "YOU CLICKED ME!";
    document.getElementById("demo3").style.fontFamily = 'Blaka';
    document.getElementById("demo3").style.fontSize = '50px';
}


//EJEMPLO 5
function myFunction3(element, color) {
    element.style.color = color;
}
//EJEMPLO6
function myFunction4() {
    document.getElementById("field2").value = document.getElementById("field1").value;
}
//EJEMPLO7
document.getElementById("myBtn").onclick = function () { myFunction5() };
/* myFunction alterna entre agregar y quitar la clase show, que se utiliza para ocultar y mostrar el contenido desplegable */
function myFunction5() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//EJEMPLO8
function myFunction6() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
//EJEMPLO9
function keydownFunction() {
    document.getElementById("demo4").style.backgroundColor = "red";
}
//EJEMPLO10
function keyupFunction() {
    document.getElementById("demo4").style.backgroundColor = "gray";
    document.getElementById("demo4").style.color = "green";
}
// EJEMPLO11
function myFunction7() {
    var x = document.getElementById("formu").value;
    document.getElementById("demo").innerHTML = x;
}


