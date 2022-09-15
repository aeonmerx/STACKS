
#Obtener datos con python
informacion = [
"APRENDE A PROGRAMAR CON AEON",
"APRENDE SEXUALIDAD CON AEON",
"APRENDE LENGUAS CON AEON"
]
cursos =[
"1.PROGRAMAR",
"2.SEXUALIDAD",
"3.LENGUAS"
  ]
input("Bienvenidos a Aeon Merx")
name= input("Escribe tu nombre")
print(name,"Escoge un curso:")
print(cursos[0],cursos[1],cursos[2])
usuario= int(input("Escoge un curso"))
#1.Le preguntamos el curso que quiere el cliente
if usuario == 1:
    print(informacion[0])
if  usuario == 2:
    print(informacion[1])
if usuario == 3:
    print(informacion[2])
#SEGUNDO PROCESO: PREGUNTARLE SI ESTA INTERESADO EN EL CURSO O NO
mensaje = int(input("Escribe 0 para salir y 1 para comprar"))
if mensaje == 1:
    print("Este es el link de compra")
if mensaje == 0:
    print("hasta luego")
  
    























