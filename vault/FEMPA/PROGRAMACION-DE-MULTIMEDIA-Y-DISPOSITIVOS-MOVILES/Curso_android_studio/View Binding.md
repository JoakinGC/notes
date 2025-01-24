Es la mejora de [[FindViewByID]] ya que este tiene el fallo que si en varios [[Activity]] hay el mismo a id se romperá la aplicación y no sabrá cual es cual


Primero debemos ir a build.gradle de nuestra [[EstructuraDeUnProyecto]] fuera de app y debemos colocar dentro de androi:

````grandle
android{
	//Todo la configuracion denuestro proeycto

	//android superior de la version 4
	buildFeatures{  
	    viewBinding = true  
	}
	//Inferior a andorid 4
	viewBinding{
		enable = true
	}

}


````

Comprobar la versión de android studio ([[EstructuraDeUnProyecto]]) y luego sincronizar 


## ¿Como usarlo?

Creamos una variable llamada binding:


````kotlin

private lateinit var binding : ActivityMainBinding //Inicializamos el binding colocando el nombre de nuesrto xml del activity que estemos

override fun onCreate(savedInstancesState: Bundle?){
	super.onCreate(savedInstancesState)
	binding = ActivityMainBinding.inflate(layoutInflater)//Usamos es para incialiar y pintar nuestro acativtyyt
	setContentView(binding.root)

	binding.nombreDeIdDeComponente.setOnClickListener{ toat() //Metodo}//Listener

}

`````

Inicializamos y en oncreate le colocamos el inflate y luego setContent()

Binding en framgent:


````kotlin

class ExampleFragment : Fragment(){

	private var _binding:FragmentExample //EXMl del fragment
	private val binding get() = _binding!!

	override fun onCreate(inflater:LayoutInflater,container:ViewGroup,savedInstancesState : Bundle?):View?{
		_binding = FragmentExampleBinding.inflate(inflater,container,false)//Le pasamos los parametros a binding de todos los parametros
		return binding.root
	}

		//Resto de codiog que podemos usar con binding para tratar con componentes

}
````