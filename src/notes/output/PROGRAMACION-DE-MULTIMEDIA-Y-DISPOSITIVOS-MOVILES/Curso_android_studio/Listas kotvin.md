Son la mejora de los [[Arrays]]. Se diferencian entre dos tipos de listas las inmutebalesList son listas que no se cambian el valor y las muteables list son listas que cambian


InMuteable list:

````kotlin

val readOnly:List<String> = listOf("Lunes","MArtes","Miercoles","Jueves","Viernes","Sabado","Viernes")

println(readonly) //Te mostrar todo los valores con toString() no muestra direccion de memeoria
println(readonly[0]) 

```` 


Tenemos diferentes metdoos

- .size : tamaño de la lista
- .last():Devuelve el ultimo valor de la lista
- .first():Devuelve el primero de la lista
- .filter():
````kotlin
var example = readOnly.filter {it.contains("a")} //it es el item o elemento

println(example)

````

Reccorer una lista:

`````kotlin
readOnly.forEach{ weekDate -> println(weekDate)} //Mas legible pero son lo mismo
readOnly.forEach{ println(weekDate)} //Son iguales pero es menos legible

`````

Mutable list:

`````Kotlin

val weekDays:MutableList<String> = mutableListOf("Lunes","MArtes","Miercoles","Jueves","Viernes","Sabado","Viernes")  
println(weekDays)  
  
  
weekDays.add("Pluton")  
println(weekDays)//Añade pluton  
  
weekDays.add(0,"Jupiter")//Añade en la posion que queramos  
  
println(weekDays.isEmpty()) //Si esta vacio true  
println(weekDays.isNotEmpty()) //Si no esta vacio es true  
  
  
weekDays.last() //Ultimo elemento de la lista
`````

Tambien cuenta con los mismo metdos de filter y forEach tambien se puede usar lo mismo de arrays