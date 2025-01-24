## ¿Qué es una clase kotvin?

En kotvin son paradigma que muestra la construcción de un [[objeto]] ya sea nuestro o nativamente

## Java VS Kolvin

En java las clases tienen sus [[Metodos]] y funcion constructora en [[Kolvin]] la función constructora pasa a cambiar su forma de hacerlo en la propia firma de la clase le pasamos los parametros que usamos en nuestra clase y despues definimos nuestros parametros y usamos un método llamado init():

```kotlin
class NombreDeClase (var parametros:String){

	var variableDentroDeClase : String

	init(var parametro:String){
		this.variableDentroDeClase = parametro
	}
	
}


var clase : NombreDeClase = NombreDeClase(parametro)
```

Como se puede ver se pasa el parámetro en ambos entonces usamos la [[Variables_kolvinn]] y init() le da valor a nuestra variable dentro de una nuestra clase

## Sobrecarga de init():


Se puede generar diferentes "[[constructores]]" , aquí el como:

```kotlin
class NombreDeClase (var parametros:String){

	var variableDentroDeClase : String
	var variable2 : String

	init(var parametro:String){
		this.variableDentroDeClase = parametro
	}

	fun sobreCargar(var p1,var p2){
		super(p1)
		this.variable2 = p2
	}
	
}


var clase : NombreDeClase = NombreDeClase(parametro)
var clase : NombreDeClase = NombreDeClase(parametro,parametro2)
```


Como se ve al hacer el llamado de init() con super() llama a la función init() y luego sigue con el flujo siempre se diferencia con la firma y el nombre.



En kotlin llamamos simple class a una clase normal a todo eso
