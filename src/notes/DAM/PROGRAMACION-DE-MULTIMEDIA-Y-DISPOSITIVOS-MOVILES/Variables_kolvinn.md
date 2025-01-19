## Variables y sus tipos

Las variables de [[Kolvin]] además del tipo de dato tenemos una forma diferente de marcar cual es variable y cual es constante.

```
val variable = "String"

var constante = "String"

```

La diferencia entre uno el otro es que una es constate y su valor no cambia al menos no directamente que es el val y otro cambia su valor en base a nuestro [[flujo de código]]

Otra característica de las variables es que no necesariamente se debe colocar el tipo de dato cuando es un [[primitivo]] y [[String]] (clase envoltorio) pero cuando se trata de una clase creada por nosotros o otra [[tipo de clase]] ( generalmente se coloca en mayúscula), se debe colocar el tipo

```
var variable1 :Supervisor = new Supervisor()

var entero = 2

var cadenaDeTexto = "Texto"

```

## Get && Set.

Cuando creamos una variable de estos tenemos dos métodos que [[Kolvin]] lo hace nativamente es el conocido get y set, el get devuelve el valor y set lo cambia:

```
var cade :String = ""

cade = "Pepe"
println(cade)
```

No es literal .get o .set si n que muestra el valor en una [[Clase]] de [[Kolvin]] cuando definimos sus propiedades tenemos variables dentro de nuestro objeto ketvin nos no hace automáticamente, pero si también podemos cambiar la forma en que lo hace:

```
class Supervisor(){
	var nombre :String = ""
	.get(){
		return if(field.isEmpty()) field = "Vacio" else field
	}
	.set(var nom:String){
		if(nom.isEmpty()) field = "Vacio" else field = nom
	}
}
```

Cuando cambiamos el valor por uno vacío este devuelve vacío y lo mismo si no tiene nada


## Null o Nullos

En [[Kolvin]] puedes asignar un valor null a una variable para evitar el típico Exception de Java por null a cambio devolverá la terminar [[exception sefaty]]


## Escritura

Se usa la [[CamelCase]]. En forma de joroba

## String

Para unir o concatenar dos variable de tipo string se puede usar el + o el algun metdodo que concatene como concat, pero tambien se puede usar "$nombreDeVariable":

```
println("Hola mi nombre es $persona.nombre")
```


