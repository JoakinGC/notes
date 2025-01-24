Son un componeten de nuestro proyecot o aplcaicion que se sobrepone por encima de todo nuestra aplicacion par amostrar algo hay de muchos tipos

Primero debemos crear la vista o xml que contiene  el disñeo de nuestro dialog y luego crear una instacia en nuestro [Activity](Activity.md) y de ahi pasarle el [PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml](xml.md) que tenga nuestra vista

````kotlin
val dialog = Dialog(this)  
dialog.setContentView(R.layout.daolog_task)


dialog.show()

````

Usando [View Binding](View%20Binding.md) se puede  acceder a los elementos primero ya debemos tener el diseño de nuestra vista en xml y luego crear una constante de ese dialogo binding para luego inflarlo y psasarle el tipo que es:

````kotlin

val bind :DaologTaskBinding =  DaologTaskBinding.inflate(layoutInflater)  
dialog.setContentView(bind.root)
````

Despues podemos acaceder a diferentes partes de nuestro dialogo como queramso y aplciar la logica que queramos
