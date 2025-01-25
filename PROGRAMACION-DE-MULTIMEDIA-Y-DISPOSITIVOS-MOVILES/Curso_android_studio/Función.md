Una función es un contenedor de operaciones.

Tenemos funciones que ya vienen de ante mano en [Kolvin](../Kolvin.md) algunas de ellas son:

* [Print](Print.md)
* *ToString*
* *main()*

Y después la que podemos crear dentro de una clase de kotvin

````kotlin
fun nombreDeFuncion( para1:String,  para2:Int){
	//Alcance y desarrollo de operaciones
}

````

Los parámetros o variables que creamos dentro de una función solo puede quedar ahí dentro salvo que lo coloquemos como una propiedad de la clase que contiene esa función y el main que llama a la funcion.

````kotlin
class Pepe(){
	val age = 30 // variable gloabal

	fun main(){
		funcion1()
	
	}

	fun funcion1( para1:String){
		var mensaje : String = "Hola $para1 y mi edad es $age" //variable de funcion
	print(mensaje)
	}

}

````

### Tipos de Funciones:

Tenemos funciones con parametros normales, una funcion con parametros de salida y mixtas:.

````kotlin
// funcion de salida
fun salida():String{
	var mensaje:String = "Pepe sale"
	return mensaje
}

 //Funcion con parametro por defecto
fun defecto(para1:String = "Nadie"){
	println("Hola $para1")
}

//Funcion pequeña

fun segundoMensaje(para1:String = nadie) = print("Hola $para1")


// funcion de saldia y entrada
fun salida ( nom:String):String{
	var mensaje:String = "Pepe sale $nom"
	return mensaje
}

````

[When](When.md)
