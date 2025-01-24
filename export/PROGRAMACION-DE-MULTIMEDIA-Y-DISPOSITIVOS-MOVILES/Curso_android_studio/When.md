Es parecido a switch pero de kotvin

````kotlin

fun getMonth(month:Int){

	when(month){
		1-> println("enero")
		2-> println("Febrero")
		3-> println("marzo")
		4-> println("Abril")
		5-> println("Mayo")
		6-> println("Junio")
		7-> println("Julio")
		8-> println("Agosto")
		9-> println("Septiembre")
		10-> println("Octubre")
		11-> {
			println("Noviembre")
			println("Noviembre")
		}
		12-> println("Diciembre")
		else -> printl("NO es un mes válido")
	}

}


fun getTrimestre(month:Int){

	when(month){
		1,2,3-> println("Primer Trimestre")
		4,5,6-> println("Segundo Trimestr")		
		7,8,9-> println("Tercer Trimestre")	
		10,11,12-> println("Cuarto Trimestr")		
		else -> printl("NO es un mes válido")
	}

}


fun getSemestre(month:Int){

	when(month){
		in 1 .. 6 -> println("Primer Semestre")
		in 7 .. 12-> println("Segundo Semestre")				
		!in 1 .. 12 -> println("Semestre NO valido") //Si ! mothn no esta en entre 1 y 12 muestra no valido	
	}

}


````

Any es un clase que sinifica que puede ser cualquiera tipo de dato pero no se puede usar para sumar ya que al no saber que tipo de dato va ahacer no puedes sumar un tru con un true.

````Kotlin
fun getSemestre(value:Any){
	//No puedes: value = value + value
	when(value){
		is Int -> value + value
		is String -> println(value)
		is Boolean -> if(vallue) println("Value es un boolena")
	}

}
````

Gracias a when podemos controlar el tipo de dato que puede llegar a ser y si es un tipo podemos hacer una cosa o otra

## Guardar un resultado de when en una vairable:

En una función normal ponemos return para que devuelva algo

````kotlin
fun getSemestre(month:Int):String{

	when(month){
		in 1 .. 6 -> return "Primer Semestre"
		in 7 .. 12-> return "Segundo Semestre"
		!in 1 .. 12 -> return "Semestre NO valido"		
	}
	
}

````

Pero el valor de when podemos guardar lo que retorna aun variable respetando su tipo claro:

````kotlin

fun getSemestre(month:Int):String{

	val result = when(month){
		in 1 .. 6 ->  "Primer Semestre"
		in 7 .. 12->  "Segundo Semestre"
		!in 1 .. 12 ->  "Semestre NO valido"		
		}
	return result
}



//Forma simplificada
fun getSemestre(month:Int) = when(month){
		in 1 .. 6 ->  "Primer Semestre"
		in 7 .. 12->  "Segundo Semestre"
		!in 1 .. 12 ->  "Semestre NO valido"		
		}
	return result

````

[Nulabilidad kotlin](Nulabilidad%20kotlin.md)
