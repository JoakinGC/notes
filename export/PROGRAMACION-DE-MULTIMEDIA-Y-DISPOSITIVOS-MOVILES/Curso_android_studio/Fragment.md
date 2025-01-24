Es una parte de la pantalla que se reatuliza, es un [Activity](Activity.md) que usa una parte de la pantalla

Primero generamos el framgnet qyue conetara con el un [PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml](xml.md) que suara el fragment:

````kotlin

companion object {  
  
    const val NAME_INTENT = "name_intent"  
    const val ADDRESS_INTENT = "address_intent"  
  
    @JvmStatic  
    fun newInstance(name: String, address: String) =  
        FirtsFragment().apply {  
            arguments = Bundle().apply {  
                putString(NAME_INTENT, name)  
                putString(ADDRESS_INTENT, address)  
            }  
        }}


````

Creamos los parámetros que vayamos a usar y borramos las constantes de afuera de la clase

Ennces en onCreate debemos inciazliar los parametro y darle el valor con la llava que coloacmos en companieon object

````kotlin
private var name: String? = null  
private var address: String? = null  
  
override fun onCreate(savedInstanceState: Bundle?) {  
    super.onCreate(savedInstanceState)  
    arguments?.let {  
        name = it.getString(NAME_INTENT)  
        address = it.getString(ADDRESS_INTENT)  
    }  
}

````

Le pasa los argumentos pero a un asi no crea el framneto con el xml que le pasamos eso lo hace en otra funcion:

````kotlin

override fun onCreateView(  
    inflater: LayoutInflater, container: ViewGroup?,  
    savedInstanceState: Bundle?  
): View? {  
  
    return inflater.inflate(R.layout.fragment_firts, container, false)  
}
````

Aque en inflater.inflate busca el xml que contega lo que queramos y en los sigueintes contiene el contiener

Con eso eso tenemos un fragmento básico pero aun así debemos realizar otras cosas para que funciones nuestro fragmento en nuestro activity, debemos primero inicializarlo y en nuestro xml principal colocar un componten con id en la parte que se quiera reutilizar la pantalla de la pantalla el compontend de que debemo usar es el :

androidx.fragment.app.FragmentContainerView y su atributo name buscara el fragment que queramos usar.

Eso seria usando el xml pero no es lo normal  se usa el código para poder hacer uso de fragment y pintar como queramos

Primero debemos agregar una implementación:

````
dependencies {  
  
    implementation("androidx.core:core-ktx:1.9.0")  
    implementation("androidx.appcompat:appcompat:1.6.1")  
    implementation("com.google.android.material:material:1.10.0")  
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")  
  
    implementation("androidx.fragment:fragment-ktx:1.6.2")  //Esta es la implementacion de fragment
  
    testImplementation("junit:junit:4.13.2")  
    androidTestImplementation("androidx.test.ext:junit:1.1.5")  
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")  
}

````

En el mainactivyty debemos colocar:

````kotlin

supportFragmentManager.commit {  
        setReorderingAllowed(true)  
        add<FirtsFragment>(R.id.btnFragmentPepe)  //Nuestro fragmento y el id del componente del fragment
  
    }  
}

````

Ahora esto sirve para pasarle parametros a nuestro fragmento, debemos sacar private los parámetros que tenemos en  el del fragment
