# -*- coding: utf-8 -*-



#TIPOS DE DATOS EN PYTHON
import  math 
print('Tipos de Datos')
print('Tipo Entero')
print(25)
print(type(25))
print('Tipo Decimal')
print(25.22)
print(type(25.22))
print('Tipo String')
print('Hola amigos')
print(type('Hola amigos'))
print('Tipo Booleano')
print(False)
print(type(False))

#OPERACIONES CON STRINGS O CADENAS
print("hola"+"amigos")
print("Bienvenidos"+" a Python")
print("Hola"*4)
variable =      "     Hola programadores"
print(variable) 
print(variable[5])
print(variable[-1])
print(variable[5:11])
print(len(variable))
print(variable.lower())
print(variable.capitalize())
print(variable.upper())
print(variable.strip())

#OPERADORES ARITMÈTICOS
print("Operadores aritmèticos")
print(4+6)
print(6-2)
print(6*2)
print(10/2)
print(11/2)
print(11//2)
print(5**3)
print(10%3)
print(1<3)
print(1>5)
print(1<=0)
print(1!=3)
print(5==6)
print(1<4 and 1>5)
print(1<2 and 1<7)
print(1<4 or 22>11)
print(1<2 or 1>8)



#CONVERSION A STRING
print("hola"+ str(5))
#CONVERSIÓN A ENTERO
print(int("5") + 6)
#CONVERSIÓN A DECIMAL O FLOTANTE
print(float(5))
#CONVERSIÓN A BOOLEANO
print(bool(0))
print(bool(1))
print(bool("hola"))

                          
#VARIABLES Y CONSTANTES
#VARIABLES

precio = 225
cantidad = 3
total = precio*cantidad
print("El precio total es de " + str(total))
hola = 1
del hola
del precio 
del cantidad
precio = 100
cantidad = 66
total = precio*cantidad
print("El precio total es de " + str(total))
 
#CONSTANTES
#variables en minúsculas 
#CONSTANTES EN MAYÚSCULAS
PASSWORD = "123456"


nada = None;
print(nada)
nada = 0
print(nada)
array = [1,2,3]
print( array[1])


#ASIGNAR VALORES A MÚLTIPLES VARIABLES
a,b,c,d= 1,2,"nombre",True
x=z=y = 68
print(a)
print(c)
print(x+z)

#LIBRERÍA MATH
# Devuelve el entero más próximo mayor o igual que x.
print(math.ceil(5.4))
# Devuelve el entero más próximo menor o igual que x.
print(math.floor(5.4))
# Devuelve el máximo común divisor  de los números a y b.
print(math.gcd(12,16))
print(math.gcd(21,6))
# Devuelve el booleano True si x es un NaN ("Not a Number").--PENDIENTE*
print(math.isnan(math.nan))
print(math.isnan(5))
#Valor equivalente a no es un número
print(math.nan)
#Variables
# Número de Euler
print(math.e)
#Número Pi
print(math.pi)
# math log10(x): Devuelve el logaritmo en base 10 de x.
print(math.log10(400))
#Funciones trigonométricas
#math.cos(x): Devuelve el coseno de x.
 #math.sin(x): Devuelve el seno de x. 
 #math.tan(x): Devuelve la tangente de x.
print(math.cos(220))
print(math.sin(110))
print(math.tan(180))
#math.degrees(x): Convierte un ángulo de grados sexagesimales a radianes.
print(math.degrees(270))
#math.radians(x): Convierte un ángulo de radianes a grados sexagesimales
print(math.radians(90))

      



