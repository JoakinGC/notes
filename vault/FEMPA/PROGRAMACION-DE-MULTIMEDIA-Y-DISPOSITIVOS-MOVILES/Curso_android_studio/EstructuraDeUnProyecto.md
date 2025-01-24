Siempre tenemos la vista Android es la mas sencilla




Cuando creamos una aplicación depende de dos partes una visual y tora lógica que es la que interactúa

Una activity es la unión entre la parte lógica y visual

Cuando creamos un nuevo new > activity empty te pregunata el nombre del activty que tiene el nombre y el nombre del [[PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml]] te saldrá un campo para clickear llamado lauche app que le decimos a android que es la pantalla principal


Una clase es un contenedor de [[Función]]es (es mucho mas obviamente).

El onCreate es la funciona que siempre se llama al inicio arrancar la pantalla

````kotlin
override fun onCreate(savedInstanceState: Bundle?) {  
    super.onCreate(savedInstanceState)  
    setContentView(R.layout.activity_first_app)  
  
    //Al arrancar pantalla  
}
````

Cada activity tiene su función lógica  setContentView es para cargar el diseño que tenemos del xml 

Siempre el [[PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml]] esta en res/layout

Podemos configurar nuestro emulador de Android en la esquina superior y te permitirá decirle a Android studio cuanto ram quieres que tenga, espacio interno y dependiendo de la versión de Android y el modelo te dirá si tiene los google service(maps, google, youtube, etc).



Tenemos el [[Android Manifest]]

Desde el actibuty podemos acceder a cualquier componente del [[PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml]]

Ya sea en la función onCreate o onResume() tenemos otros:

````kotlin

package com.example.estudioandroid.firstapp  
  
import androidx.appcompat.app.AppCompatActivity  
import android.os.Bundle  
import com.example.estudioandroid.R  
  
class FirstAppActivity : AppCompatActivity() {  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        setContentView(R.layout.activity_first_app)  
  
        val btnStart = findViewById<TipoDeComponente>(R.id.IDdeElemento) //Tipo de componente puede ser TextView, Buton ,etc.
    }  
}

````

Para luego agregar un listener para que haga algo en el momento que clic kea:

````kotlin

package com.example.estudioandroid.firstapp  
  
import androidx.appcompat.app.AppCompatActivity  
import android.os.Bundle  
import android.util.Log  
import androidx.appcompat.widget.AppCompatButton  
import com.example.estudioandroid.R  
  
class FirstAppActivity : AppCompatActivity() {  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        setContentView(R.layout.activity_first_app)  
        val btnStart = findViewById<AppCompatButton>(R.id.btnStart)  
  
        btnStart.setOnClickListener(){  
            //Codigo de accion  
            Log.i("Joaquin","Mensaje")  
        }  
        //Al arrancar pantalla  
    }  
}

````

Para msotrar el contenido de un [[editText]].


````kotlin

package com.example.estudioandroid.firstapp  
  
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
  
  
        etName.text.toString() // devuelve la informacion que contenga en este texto  
  
        btnStart.setOnClickListener(){  
            //Codigo de accion  
            Log.i("Joaquin","Mensaje")  
        }  
        //Al arrancar pantalla  
    }  
}
````


En las lista de carpetas el res es la parte de diseño:

Dentro del mismo tenemos values: en values muestra los colores que trabajamos en el .xml podemos agregar ahí todos los colores que queramos usar

Dentro de res también tenemos drawable, este contiene todas las imágenes y debemos cargar las imágenes nuevas ahí cuando queramos agregar una nueva


Para formatear el codigo tenemos el atajo ctrl + alt + l


En res / values además de los colores tenemos los srings que ahí se coloca todos los strings que se usan nuestro [[TextView]] 
y no usando la propiedad text ya que si tenemos varios strings de diferentes idiomas y seria mas difícil si uso

### ¿Como comprobar la version de android studio?

Llendo a help>about muestra la version



### Controlar los estilos de tu aplicacion y el modo oscuro:

Dentro de values>themes> tenemos dos themes  . xml que uno es el estilo oscuro y otro el el rnomal

En si cremoas un nuevo etiqueta styles  paracida a la originla podremos cambiar colores o pesoanlizar partes de la aplicacion como queremoas