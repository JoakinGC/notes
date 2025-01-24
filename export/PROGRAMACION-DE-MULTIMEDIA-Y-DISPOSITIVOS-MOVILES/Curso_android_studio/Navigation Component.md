La forma de navegar entre varios pantallas y fragmentos

Debemos colocar sus respetivas implementaciones:

````kotlin
val version = "2.7.5"  
  
//NavNavigation  
implementation("androidx.navigation:navigation-fragment-ktx:$version")  
implementation("androidx.navigation:navigation-ui-ktx:$version")

````

Damos a sincronizar y después creamos la cantidad de fragment que vayamos a usar

Navigation Graph te muestra como mapa todas las pantalla de fragment que podemos navegar

Agregamos un directorio para poder trabajar con las pantallas y luego click derecho>new>Navigation Resource File

Esto se usa para poder navegar entre pantallas mucho mejor ya que si tenemos muchas pantalla esta es mas difícil verlo

Colocamos el botón de estrellas y te acomoda todas las pantallas además este te muestra todo

Te muestra todas las pantallas y luego puedes agruparlas para no ver todo en uno

Por detrás tienen un código que cada pantalla o [Fragment](Fragment.md)o [Activity](Activity.md) agregado se muestra así:

````xml
<?xml version="1.0" encoding="utf-8"?>  
<navigation xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:app="http://schemas.android.com/apk/res-auto"  
    xmlns:tools="http://schemas.android.com/tools"  
    android:id="@+id/main_graph"  
    app:startDestination="@id/mainActivity">  
  
    <fragment        android:id="@+id/firstFragment"  
        android:name="com.practica.navigationcomponentexample.FirstFragment"  
        android:label="fragment_first"  
        tools:layout="@layout/fragment_first" />

````

Fragment se coloca la etiqueta y se coloca la ruta el nombre del id del framgento,

En la etiqueta del fragemnt padre en donde "app:startDestination:" en este podemos colocar la pantalla inicial y cual es la que empieza o la home

Recordar que solo hay una pantalla en realidad ya que los fragmentos son un reciclador de una pantalla osea que si o si debemos tener un [Activity](Activity.md) que contenga nuestros fragmentos

Ósea debemos usar un componente especial en nuestro [PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml](xml.md) del actityty para invocar nuestro Navigation Resousece File. Que es el Fragment Container View y agregarle un id para poder controlarlo

Quedando de la siguiente manera:

````xml

<?xml version="1.0" encoding="utf-8"?>  
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:app="http://schemas.android.com/apk/res-auto"  
    xmlns:tools="http://schemas.android.com/tools"  
    android:layout_width="match_parent"  
    android:layout_height="match_parent"  
    tools:context=".MainActivity">  
  
    <androidx.fragment.app.FragmentContainerView        android:id="@+id/navHostFragment"  
        android:name="androidx.navigation.fragment.NavHostFragment"  
        android:layout_width="0dp"  
        android:layout_height="0dp"  
        app:layout_constraintTop_toTopOf="parent"  
        app:layout_constraintEnd_toEndOf="parent"  
        app:layout_constraintStart_toStartOf="parent"  
        app:layout_constraintBottom_toBottomOf="parent"  
        app:navGraph="@navigation/main_graph"  
        />  
  
</androidx.constraintlayout.widget.ConstraintLayout>
````

En el name le decimos la propiedad que va usar android y que si o o si tiene que ser esa linea y en app:navGraph le colocamos el nombre nuestro navigation que hayamos hecho:

````
  android:name="androidx.navigation.fragment.NavHostFragment"  
  app:navGraph="@navigation/NombreDenavigation"  
````

Despues le agregamos una propiedad mas para decirle cual es el contenedor principal de toda la vista que es:

````
app:defaultNavHost="true"
````

Luego podemos trabajar con nuresto graph navigation y tendremosel paratado design y ahi podermos darle con una flecha para decirle a que lado ir cuando cambimos de lado, pero si vamos al apartado de -> superior y clickeamos podremos elegir el nombre del id, desde donde y a hacia donde y lo mas importnte una animacion para mostrar que se puede hacer. Es mejor entenderlo desde la herramienta de android studio

Pero tambien tiene  su parte de xml que podemos configurar nosotros directamente:

````xml
<fragment  
    android:id="@+id/firstFragment"  
    android:name="com.practica.navigationcomponentexample.FirstFragment"  
    android:label="fragment_first"  
    tools:layout="@layout/fragment_first" >  
    <action        android:id="@+id/action_firstFragment_to_secondFragment"  
        app:destination="@id/secondFragment" />
````

En el action configuramos el id del cambio de fragmento y su destino pero tambien controlamos sus animaciones con:

app:enterAnim="@anim/nav_default_enter_anim"  
app:exitAnim="@anim/nav_default_pop_enter_anim"  
app:popEnterAnim="@anim/nav_default_pop_enter_anim"  
app:popExitAnim="@anim/nav_default_exit_anim"

En anim podemos usar o definir difrernetes animaciones de cambio de pantlla como queramos

### Safe Arguments:

Es una dependencia que recomienda google para poder pasar diferentes datos para pintar en la pantalla del fragmento nunca vamos a pasar objectos complejos entre fragmentos ya que es una mala practica lo que si pasamos son id de algunos objectos enrte otras cosas:

En l grable scripts, en build.gradle.kts agregamos:

id("androidx.navigation.safeargs.kotlin") version "2.7.1" apply false

id("androidx.navigation.safeargs") version "2.7.1" apply false, si no usamos kotlin

Debemos hacerlo en los dos build.gradle

id("androidx.navigation.safeargs.kotlin")

Una vez sincronizado debemos ir a nuestro grapg o donde se encuentra xml que maneja nuestras pantalla podemo usar el lado visual para poder pasr un arguemnto pero tambien tenemos el codigo:

````xml
<fragment  
    android:id="@+id/secondFragment"  
    android:name="com.practica.navigationcomponentexample.SecondFragment"  
    android:label="fragment_second"  
    tools:layout="@layout/fragment_second" >  
    <action        android:id="@+id/action_secondFragment_to_thirdFragment"  
        app:destination="@id/thirdFragment" />  
    <argument     
       android:name="name"  
        app:argType="string" />  
</fragment>
````

Arguemtn tendra enombre y el typo igual la parte visual te lo hara automaticamente pero si falla es  bueno saber que hace por detras para entender que arreglar

Una vez hecho eso debemos cambiar el como pasamos entre pantallas:

````kotlin
findNavController().navigate(  
    FirstFragmentDirections.actionFirstFragmentToSecondFragment(  
        name = "Pepe"  
    )  
)
````

Por dertras kotlin ya tiene creada una clase direcction con elnombre de tu fragmento y la accion y dentro de eeste definimos el parametro, para poder recibirlo:

````kotlin
````
