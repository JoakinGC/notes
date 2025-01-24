
Las arrays son secuencias de datos, sabiendo las [[Variables Kotvin]] , [[Variables Alfanumericas]]
 y [[Nulabilidad kotlin]]

````kotlin

var nameString:String = "pepe"
var nameString2:String = "pepe"
var nameString3:String = "pepe"
var nameString4:String = "pepe"

println(nameString)

//No sirve repetir para eso existen los arrays

val weekDays = arrayOf("Lunes","Martes","Miercoles","VJueves","Viernes","Sabado" ,"Domingo")

println(weekDays[0])//Comienza 0 el indice 0-6

//Asiganmos un nueo valor:

weekDays[0] = "Hola"
println(weekDays[0])


println(weekDays.size) //Menciona el tamaño 7 empezando desde 1

if(weekDays.size >= 8){
	println(weekDays[7])
}else{
	println("NO hay mas valores en el array")
}



````

Para poder recorrer un array usamos bucles:

````kotlin
for(position in weekDays.indices){
	println("Hoy es " + weekDays[position])
}


for((position,value) in weekDays.withIndex()){
	println("La posición $position, contiene $value")
}
````

Muestra el ultimo for:

La posición 0, contiene Lunes
La posición 1, contiene Martes
La posición 2, contiene Miercoles
La posición 3, contiene VJueves
La posición 4, contiene Viernes
La posición 5, contiene Sabado
La posición 6, contiene Domingo


Si solo nos interesa el valor:

````kotlin

for(weekDay in weekDays){
	println("Ahora es $weekDay")
}

````

Los arrays son muy buenos pero tiene muchas restricciones que no permiten mucha flexibildiad por eso se crearon las [[Listas kotvin]]