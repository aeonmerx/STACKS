#CALCULADORA 01 CALCULADORA SIMPLE EN PYTHON, LA MISMA QUE APP INVENTOR
numero1 = int(input("Escribe un numero"))
numero2 = int(input("Escribe otro número"))
elecciones = [
    "+","-","*","/"
    ]
print(elecciones)
decision=input("Elige el signo según la operación")
if decision=="+":
    print("El resultado es :" , numero1+numero2)
elif decision == "-":
    print("El resultado es: ",numero1-numero2)
elif decision == "*":
    print("El resultado es: ",numero1*numero2)
elif decision == "/":
    print("El resultado es: ",numero1/numero2)
