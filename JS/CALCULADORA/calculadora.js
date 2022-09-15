function calculadora(operacion){
    var operando1 = document.calc.numero1.value
    var operando2 = document.calc.numero2.value 
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}