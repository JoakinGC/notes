Es el intermediario entre la parte logica y la pantalla que ve el usuario, por cada activty tenemos un xml con su deiseño

### ¿Cómo pasar información entre actvity?

Usamos Intent, seguramente allá otra forma la mas básica es con la clase Intent()

Toma dos valores como parámetro:
1- El primero es el contexto, osea al activity con el que vamoas a trabajar si se coloca this es en contexto actual de la activyty si se coloca la ruta absolutta de otra activty es otro activty
2- El segundo parámetro es el actibty que deseamos abrir en pantalla

Pero esto solo lo crea debemos llamar a una funcion llamada startActibvty(Content):

````kotlin

val btnStart = findViewById<AppCompatButton>(R.id.btnStart)  
val etName = findViewById<AppCompatEditText>(R.id.etName)  
  
  
  
  
btnStart.setOnClickListener(){  
    val name = etName.text.toString()  
  
    if(name.isNotEmpty()){  
        val intent = Intent(this,ResultActivity::class.java)  
        startActivity(intent)  
    }  
  
}


//Codigo de la primera app para ver a detalle

````

Entonce aunque pasemos intent este no mostrara nada en pantalla al menos que le pasemos un valor

````kotlin

//Primer Activyty Main

package com.example.estudioandroid.firstapp  
  
import android.content.Intent  
import androidx.appcompat.app.AppCompatActivity  
import android.os.Bundle  
import android.util.Log  
import androidx.appcompat.widget.AppCompatButton  
import androidx.appcompat.widget.AppCompatEditText  
import com.example.estudioandroid.R  
  
class FirstAppActivity : AppCompatActivity() {  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        setContentView(R.layout.activity_first_app)  
        val btnStart = findViewById<AppCompatButton>(R.id.btnStart)  
        val etName = findViewById<AppCompatEditText>(R.id.etName)  
  
  
  
  
        btnStart.setOnClickListener(){  
            val name = etName.text.toString()  
  
            if(name.isNotEmpty()){  
                val intent = Intent(this,ResultActivity::class.java)  
  
                intent.putExtra("EXTRANAME",name)  //Le pasamos name con la llave EXTRANAME
                startActivity(intent)  
            }  
  
        }  
    }  
}
````

En el segundo activyt podemos acceder al "EXTRANAME" solo con las llaves \[posicion\] o dicnedo en tipo d dato que debemos recibir pero incluso con esto fallaria ya que no sabemos de ante mano si lo que le pasamos no es null.

Entonces usamos:

````kotlin

//Segundo activity:

package com.example.estudioandroid.firstapp  
  
import androidx.appcompat.app.AppCompatActivity  
import android.os.Bundle  
import android.widget.TextView  
import com.example.estudioandroid.R  
  
class ResultActivity : AppCompatActivity() {  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        setContentView(R.layout.activity_result)  
        val tvResult = findViewById<TextView>(R.id.tvResult)  
        val name:String = intent.extras?.getString("EXTRANAME").orEmpty()  //Accedemos a su valor
  
  
    }  
}
````

Siempre es recomcable crear diferentes funciones para todo lo que hagamos ademas tambien es bueno hacer una funcion que inice todo los componetnet y otras que eschuce los listeners

### ¿Como obtengo el color para cambiar el fondo de un componente ?

Se hace con ConxtCompart.getColor(referencia de color) Primero ya deberia tener el color en el xml de colors

Ademas despues de obtener el color se busca el componente y luego se le pasa el color:

````kotlin

//Ejemplo completo en el proyecto de IMC aplicaicon

viewMale = findViewById<CardView>(R.id.viewMale)//Buscamos el compontent a cambiar


viewMale.setOnClickListener{//listener que ejecuta cuando se clickea compente
	viewMale.setCardBackgroundColor(//cambia el color
		R.color.back_componen_selectedt//Referencia de color cargado en xml de colors
	)

}


````

### Listeners de algunos de componentes:

Para el compontente de tipo [RangeSlider](RangeSlider.md)  usamos el listener:

* addOnChangeListener{-,value,-} (averiguar ams de ele en futuro): el values el valor edl rango que cambia.
* setOnClickListener{}: Se usa cualndo se clickea ese componete
* onBackPressed(): metodode deprecado ya no se usa pero se usa para volver a la pantalla anterior o activity

### Acceso a diferentes componetens de nuestro xml

Tenemos una funcion basica llamada [FindViewByID](FindViewByID.md) pero esta ya esta deprecada ahora se usa *bind.idCoompete* que depende de una dependicna para poder funcina pero es mucho mas sencillo y como se usa ahora

Esta te permite entrar en cualquier componete que tenga un id en nuestro xml en el activtyt([TextView](TextView.md),[AppCompatButton](AppCompatButton.md),etc)

La forma de entrar a nuestro xml que contiene las string que usamos en nuestro activtuy (explicado en [EstructuraDeUnProyecto](EstructuraDeUnProyecto.md)) es con el metodo:

````kotlin

getString(R.string.nombreDeString)//Entonces podemos accede a nuestro xml para poder usarla

//Se puede uar para cmbiar el valor de nuestro textview
tvIbm.text = getString(R.string.error)//Se puede usar para msotrar un error

````

## ¿Que sigue?

Pues depesue entendeor lo basico hay que mejorar y sar a depndencia ademas de que empezar a cargar [Listas](../Listas.md)  usando [Recicly View](../Recicly%20View.md)
