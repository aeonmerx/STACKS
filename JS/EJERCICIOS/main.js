

 // FUNCIONES O MÉTODOS DE JAVASCRIPT MAIN.HTML//  
 // 01 DIBUJAR LINEA
   function dibujarLinea(){
      document.write('<hr style="background-image:linear-gradient(to left,blue,yellow,orangered); height: 80px;"></hr>');
    }
//---------------------------------------------------------------------------------------------------------------//
 // 02 RECIBIR DATOS
    function recibirDatos(dato){
        dato =  prompt(dato);
         document.write('La información recibida y guardada en variable datos es: ' + dato)
         document.write('El tipo de dato usado es: '+ typeof dato);
        }
//---------------------------------------------------------------------------------------------------------------//
 // 03 SALTAR LINEA
      function saltarLinea() {
         document.write('<br>');
     }
//---------------------------------------------------------------------------------------------------------------//
 // 04 IMPRIMIR
     function imprimir(frase) {
         document.write(frase);
         saltarLinea();
     }
 //---------------------------------------------------------------------------------------------------------------//
  // 05 CALCULAR IMC
     function calcularImc (peso,altura){
         return(peso/(altura*altura));

     }
//---------------------------------------------------------------------------------------------------------------//
 // CALCULAR IMC DOS PERSONAS
     function calcularImcDosPersonas(){
        imprimir("El promedio del imc calculado de Ana y Gabriela es :"+ (calcularImc(65,1.73)+calcularImc(78,1.65))/2);

     }
//---------------------------------------------------------------------------------------------------------------//
 // 06 HALLAR RESULTADO
     function hallarResultado(){
        var nombre = prompt("Cual es tu nombre?");
         var peso  = prompt(nombre+"  Informe su peso en kg");
         //console.log("El peso guardado es: "+ peso);
         var altura = prompt("Informe su altura, ejemplo 1.78");
         //console.log("La altura guardada es: "+ altura);
         imcCalculado = calcularImc(peso,altura);
         //console.log("El imc calculado es: "+ imcCalculado)
         imprimir('<h1>El imc calculado es  </h1>: '+ imcCalculado);
         if(imcCalculado<=15){
            imprimir('Tu estado es delgadez severa');
         }
         else if(imcCalculado>=15 && imcCalculado <=15.9){
            imprimir('Tu estado es delgadez leve');
         }
         else if(imcCalculado>=16 && imcCalculado <=18.4){
            imprimir('Tu estado es delgadez');
         }
         else if(imcCalculado>=18.5 && imcCalculado <=24.9){
            imprimir('Tu estado es saludable');
         }
         else if(imcCalculado>=25 && imcCalculado <=29.9){
            imprimir('Tu estado es sobrepeso');
         }
         else if(imcCalculado>=30 && imcCalculado <=34.9){
            imprimir('Tu estado es obesidad moderada');
         }
        else  if(imcCalculado>=35 && imcCalculado <=39.9){
            imprimir('Tu estado es obesidad severa');
         }
        else  if(imcCalculado>= 40){
            imprimir('URGENTEEE! Tu estado es obesidad mórbida');
         }
        }
 //---------------------------------------------------------------------------------------------------------------//
  // 07 CALCULAR PUNTOS
     function calcularPuntos() {
         var cantidadVictorias = parseInt(prompt("Escribe número de victorias"));
         var cantidadEmpates = parseInt(prompt("escribe el número de empates"));
         var puntosTotales = "El total de puntos es:" + ((cantidadVictorias * 3) + cantidadEmpates);
         imprimir(puntosTotales);
       }
 //---------------------------------------------------------------------------------------------------------------//
  // 08 CONDICIONALES
       function condicionales(puntosTotal){
        var  puntosTotal = parseInt(prompt(puntosTotal));
         if(puntosTotal>28){
             imprimir("El equipo esta mejor que el año pasado");
         }
         else if(puntosTotal == 28){
             imprimir("El equipo esta igual que el año pasado");
         }
         else if(puntosTotal <28 ){
             document.write("El equipo esta peor que el año pasado");
         }
         else{
             document.write("No se ingreso ningún parámetro");
         }
     
       }
 //---------------------------------------------------------------------------------------------------------------//
  // 09 SORTEO
       function sorteo(n) { 
         return Math.round(Math.random()*n);
     }   
//---------------------------------------------------------------------------------------------------------------//
 // 1O LOTERIA 
     function loteria(){
      var numeroPensado = sorteo(10);
      var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"))
     
      if (numeroPensado == numeroLanzado){
          imprimir("usted acertó");
      }
      else {
        if (numeroLanzado > numeroPensado){
              imprimir("usted erró, el número pensado era menor que tu número");
          } 
         else{
              imprimir("usted erró, el número pensado era mayor que tu número");
          }
      }
     }
//11  AÑO MUNDIAL FIFA

function añoMundial(){
    var añoMundial = 1930 ;
    var limite = parseInt(prompt('Ingrese el año limite para calcular los años de mundiales FIFA '))
    while (añoMundial <= limite ){
        imprimir("Hubo mundial de la fifa en el año:" + añoMundial);
        añoMundial = añoMundial+4 ;
    }
    alert('Final del bucle while');
}
// 12 CICLO WHILE

function cicloWhile(){
    imprimir('WHILE');
    var multiplicador = 1;
    while(multiplicador <= 10 ){
    imprimir( 5 * multiplicador );
    multiplicador = multiplicador + 2 ;

    }
}
 // 13 CICLO FOR
function cicloFor(){
    imprimir('FOR');
    for(var multiplicador = 1 ; multiplicador <= 10 ; multiplicador++){
        imprimir( 5 * multiplicador );
    }
}

// 14 CALCULAR MEDIA DE LAS EDADES DE UNA FAMILIA
function calcularMedia(){

var numeroMiembros = parseInt(prompt("Ingrese el número de miembros de su familia"));
var contador = 1 ;
var totalEdades = 0;
while (contador<= numeroMiembros){
    edad = parseInt(prompt("Ingrese la edad del familiar"))
    totalEdades = totalEdades + edad ;
    contador++ ;
}

mediaEdades = totalEdades/numeroMiembros ;
imprimir('La media de las edades es: '+ mediaEdades);
imprimir('fin');

}
// 15 IMPRIMIR TODOS LOS NÚMEROS PARES DEL 1 AL 100 USANDO UN BUCLE
function numerosPares(){
    var contador = 2;
    while(contador <= 100) {
        imprimir(contador);
        contador = contador + 2; // incrementar de dos en dos
    }
    imprimir("FIN");
}

// 16  ROMPER UN BUCLE ADIVINAR NÚMERO PENSADO

function usandoBreak(){
var numeroPensado = Math.round(Math.random()*10); // ALEATORIA DE 1 A 10 GENERA UN NÚMERO
var intentos = 3;
var contador = 1 ; // CONTADOR PARA EL WHILE PARA QUE NO SEA UN BUCLE INFINITO 

while ( contador <= intentos ) {
    var numeroLanzado = parseInt(prompt("Ingrese un número entre 0 y 10"));
    if (numeroPensado == numeroLanzado ){
    // contador++
    break ;
    }
    else{
    alert('Usted erró');
    // contador++
    }
    contador++ ;
}

if (numeroPensado == numeroLanzado){
    imprimir('Usted ha acertado en el intento '+ contador + ' el numero pensado era: '+ numeroPensado);
}
else {
    imprimir('Usted erró el número pensado era: '+ numeroPensado);
}
imprimir('fin');
}
// 17 ESTRELLAS
function estrellas(){
    for(var lineas= 1; lineas<=3; lineas++){
        for(var columnas = 1; columnas <=10; columnas++){
            document.write('*');

        }
        saltarLinea();
     
    }
    saltarLinea();
    document.write('fin');
}
// 18 INICIO DE SESIÓN  USANDO WHILE
function inicioSesion(){
    var inicioDeSesionRegistrado = "reset";
    var contrasenhaRegistrada = "aeonmerx";
    
    var maximoIntentos = 3;
    var intentoActual = 1;
    
    while(intentoActual <= maximoIntentos){
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");
    
        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema" + inicioDeSesionIngresado);
            intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1! 
        } else {
            if (intentoActual == 3) {
                alert("Agotaste el número permitido de intentos!");
            } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        }
    
       // vaya al próximo intento 
        intentoActual = intentoActual +1  
    }
}

    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OTRAS FUNCIONES
/// 19 CALCULAR IMC DOS
function calcularImcDos(peso,altura,nombre) {
    imc =  peso/(altura*altura);
    if(imc<25){
        imprimir("El peso calculado de "+ nombre + " es: " + imc ) ;
        imprimir("Debe subir de peso");
    }
    if(imc>30){
        imprimir("El peso calculado de "+ nombre + " es: " + imc ) ;
        imprimir("Estas en obesidad");
    }
    else{
        imprimir("El peso calculado de "+ nombre + " es: " + imc ) ;
        imprimir("No tienes desnutrición");
    }
    calcularImc(74,1.65,"Andres")
    calcularImc(88,1.76,"Felipe")
    calcularImc(98,1.65,"Ana")
    }

    


// 20 FUNCIÓN MOSTRAR ARREGLO
function mostrarArreglo(){
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
      document.write(text);
    }
} 
/*¿Cuántos años de diferencia tienes con tu hermano? 
Escribe un programa que muestre el mensaje 
¨Nuestra diferencia de edad es¨, 
concatenando el resultado de la diferencia de tu edad con
 la de tu hermano (o de un amigo). */
// SOLUCIÓN:
//21 CALCULAR DIFERENCIA
function calcularDiferencia(edad,edadHermano){
    //MATH.ABS CALCULA EL VALOR ABSOLUTO 
    resultado = Math.abs(edadHermano-edad);
    document.write("El resultado es:"+ resultado);
    }

// 22 MOSTRAR DIFERENCIA
function mostrarDiferencia(){
    edadUno = 12
    edadDos = 34
     calcularDiferencia(edadUno,edadDos);
    
    edadTres = 22
    edadCuatro = 45
    
    calcularDiferencia(edadTres,edadCuatro); 
    document.getElementById("demo").innerHTML = text;
    edadUno = 12
    edadDos = 34
     calcularDiferencia(edadUno,edadDos);
}
// 23 SUMAR UNO EN UNO EN BUCLE FOR
function sumarUno(x){
    for (let i = x ; i < 120 ; i++) {
      document.write(i+"<br>") ;
    }
    }
// 24 ADIVINAR NÚMERO 
function adivinarNumero(){
    var numeroPensado = Math.round(Math.random()*10);
    var numeroLanzado = parseInt(prompt('Ingrese un número entre 0 y 10'));
    if (numeroLanzado == numeroPensado){
    imprimir('Usted acertó');
    }
    if (numeroPensado != numeroLanzado){
    imprimir('Fallaste, el nùmero pensado era:'+ numeroPensado);
    }
}
// 25 LICENSIA DE CONDUCCIÓN
function licenciaConduccion(){
    var edad = parseInt(prompt("¿Cuál es tu edad?"));
    var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");
    // USANDO AND EN LA CONDICIONAL PARA NO CREAR DOS
    /*
    if(edad >= 18) {
        if(tieneLicencia == "S") {
            imprimir("Puedes conducir");

        }
    }
    */
    if((edad >= 18)&&(tieneLicencia == 'S')) {
            imprimir("Puedes conducir");

    }
    /* OTRA ALTERNATIVA AL ELSE
     if(edad < 18) {
        imprimir("No puedes conducir");

    }
    */
    else {
        imprimir("No puedes conducir");

    }
}
// 26 PROGRAMACIÓN ORIENTADA A OBJETOS
/// POO CLASES
function mostrar() {
    class Person {
        constructor(age,name) {
            this.age = age;
            this.name = name;
        }
    }
    class Car {
        constructor(model,price) {
            this.model = model;
            this.price = price;
        }
    }
    
let personaUno = new Person(24,'Sandra')
     document.write(personaUno);
    document.write(personaUno.age);
    saltarLinea();
    document.write(personaUno.name);
    saltarLinea();
    console.log(personaUno);

let carroUno = new Car('Ferrari',60000)
     document.write(carroUno);
    saltarLinea();

    document.write(carroUno.model);
    saltarLinea();
    document.write(mostrar);
    saltarLinea();

    document.write(carroUno.price);
    console.log(carroUno);

}

// 27  DOM JS HTML CONEXIÓN
  // CREAR FUNCIÓN QUE COMPARE EL VALOR DEL INPUT CON EL VALOR DE LA VARIABLE ADIVINACIÓN
    function verificar(){
    // CAPTURA ETIQUETAS HTML NECESARIAS
    var secretos = [3,5,7,9];
        var button = document.getElementById('conector');
        var input = document.querySelector('input');
        // CREAR VARIABLE CON LA QUE SE VA A COMPARAR LA ENTRADA DE DATOS
        // FUNCIÓN DE NÚMERO ALEATORIO CON LA LIBRERÍA  MATH Y MATH.ROUND QUE REDONDEA QUITANDO DECIMALES
        // var //adivinacion = Math.round(Math.random()*10) ;
          // EVALUAR CONDICIONES LÓGICAS
          var encontrado = false;
          for(var posicion = 0 ; posicion < secretos.length ; posicion++ ){
            if( parseInt(input.value)== /*adivinacion*/secretos[posicion] ){
                alert('Acertaste');
                encontrado = true;
                break;
              }
              // SI ES FALSO ENTONCES MOSTRAR ALERTA 'PERDISTE'
            }
            if (encontrado == false){
                alert('Usted errò');
            }
            // CUANDO TERMINE DE EVALUAR VACIAR EL INPUT Y ENFOCAR EL CLICK EN EL
              input.value = "" ;
              input.focus();
        }
        // FUNCION PARA AGREGAR NUMERO DE ELEMENTOS REQUERIDO EN UN ARREGLO SIN REPETIR NINGUNO
  ////28 ARREGLO AVANZADO ------------------------------////
     function arrayAvanzado(){
        var ingredientes = [];
      // DEFINIMOS UN NÚMERO DE INGREDIENTES COMO USUARIOS
      var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
      // CREAMOS UN CONTADOR PARA EL WHILE
      var contador = 1;
      // MIENTAS CONTADOR SEA MENOR O IGUAL A CANTIDAD
      while (contador <= cantidad) {
        // PEDIMOS UN INGREDIENTE Y LO ALMACENAMOS EN UNA VARIABLE
        //**** CUANDO EL FOR SE ROMPE VUELVE A ESTA LINEA
        var ingrediente = prompt("Informe el ingrediente " + contador);
        // CREAMOS UNA BANDERA BOOLEANA EN UNA VARIABLE
        var existe = false;
        // GENERAMOS UN CICLO FOR DENTRO DEL WHILE
        // MIENTRAS POSICION INICIALIZADA EN 0 SEA MENOR A LA LONGITUD DEL ARRAY ENTONCES LE SUMARÁ UNO A LA VARIABLE POSICIÓN
        for (var posicion = 0; posicion < ingredientes.length; posicion++) {
          // SI INGREDIENTES ARRAY EN EL ELEMENTO POSICION SEA IGUAL A UN INGREDIENTE YA ESCRITO
          // CAMBIAR BOOLEANO POR TRUE DICIENDO QUE YA EXISTE
          if (ingredientes[posicion] == ingrediente) {
            existe = true;
            // LUEGO IMPRIMIR INGREDIENTE REPETIDO
            // ROMPER EL BUCLE PARA QUE VUELVA A PREGUNTAR INFORME EL INGREDIENTE
            alert("repetido " + ingrediente);
            break;
          }
        }
        // TERMINA EL FOR CUANDO LA VARIABLE POSICIÓN ES IGUAL A LA LONGITUD DEL ARREGLO SIN REPETIRSE NINGUN INGREDIENTE
        // AHORA COMPARA SI EXISTE ES IGUAL A FALSO ENTONCES AGREGA EL INGREDIENTE Y LE SUMA UNO A CONTADOR
        if (existe == false) {
          ingredientes.push(ingrediente);
          contador++;
        }
      }
      console.log(ingredientes);
     }
