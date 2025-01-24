# ¿ Qué son los métodos?

Los métodos son acciones que pueden realizar nuestro [[obejcto ]]que son definidos ya sea en un interfaz o clase o por herencia.

## Declaración en [[Kolvin]].

```
class Supervisor(var nombre:String, var apellido:String){
	var nombre:String
	var apellido: String

	init(){
		this.nombre = nombre
		this.apellido = apellido		
	}

	fun supervisar(){
		println("YO estoy supervisando.");
	}

	fun presentacion(){
		println("Hola mi es $nombre")
	}

}
```