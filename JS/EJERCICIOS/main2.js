// 29 OTRA VERSIÓN DE VERIFICAR MÁS SENCILLA
function verificarDos(){
    var input = document.querySelector('input');
// FUNCIÓN DE NÚMERO ALEATORIO CON LA LIBRERÍA  MATH Y MATH.ROUND QUE REDONDEA QUITANDO DECIMALES
var adivinacion = Math.round(Math.random()*10) ;
 // EVALUAR CONDICIONES LÓGICAS
   if( parseInt(input.value)== adivinacion ){
       alert('Acertaste');
     }
     // SI ES FALSO ENTONCES MOSTRAR ALERTA 'PERDISTE'
     else{
       alert('Perdiste');
     }   

   // CUANDO TERMINE DE EVALUAR VACIAR EL INPUT Y ENFOCAR EL CLICK EN EL
     input.value = "" ;
     input.focus();   
     // LLAMADO A LA FUNCIÓN 
}
 