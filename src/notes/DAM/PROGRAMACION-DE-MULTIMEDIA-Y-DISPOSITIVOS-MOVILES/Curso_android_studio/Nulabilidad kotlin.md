En Android o kotlin las variables pueden ser  [[Null]]

No se puede asignar una variable null:

````kotlin
var name: String = null //mal


var name: String?= null //Bien


println(name!!)//Le dicimo con"!" que no es null y que estamo seguro que no es null
println(name?.get(3): "Es null")// Si no es null name dame el valor pero si lo no lo des da  otro resultado

````