En [[Kolvin]], `init()` es un bloque de inicialización primario que se utiliza para ejecutar código de inicialización cuando se crea una instancia de una clase. Es un componente opcional de una clase y se coloca dentro del cuerpo de la clase, generalmente después de la declaración de las propiedades de la clase. El bloque `init()` se ejecuta inmediatamente después de que se ha llamado al constructor primario de la clase.

Puedes usar `init()` para realizar cualquier tipo de inicialización necesaria para una instancia de la clase. Esto es especialmente útil cuando necesitas realizar cálculos o configuraciones adicionales antes de que el objeto esté listo para su uso. Aquí tienes un ejemplo de cómo se utiliza `init()`:


```KOTLIN
class MiClase(nombre: String, edad: Int) {
    val nombre: String
    val edad: Int
    
    init {
        // Código de inicialización que se ejecuta cuando se crea una instancia de la clase
        this.nombre = nombre
        this.edad = edad
    }
    
    fun mostrarInformacion() {
        println("Nombre: $nombre, Edad: $edad")
    }
}

```


En este ejemplo, la clase `MiClase` tiene dos propiedades: `nombre` y `edad`. El bloque `init()` se utiliza para inicializar estas propiedades cuando se crea una instancia de la clase. Cuando se llama al constructor primario, el código dentro de `init()` se ejecuta y establece los valores de las propiedades.

Puedes usar `init()` para realizar cualquier tarea de inicialización que necesites, como la validación de datos, la asignación de valores predeterminados, la configuración de conexiones a bases de datos u otras operaciones personalizadas.

Además del bloque `init()`, en Kotlin también puedes tener varios constructores secundarios que te permiten proporcionar diferentes formas de inicializar un objeto de clase. Los constructores secundarios también pueden utilizar `init()` para realizar tareas de inicialización adicionales, además de las realizadas en el constructor primario. Esto proporciona flexibilidad en la forma en que se pueden crear objetos de una clase y permite una variedad de opciones de inicialización.


```
class MiClase(nombre: String, edad: Int) {
    val nombre: String
    val edad: Int
    
    init {
	        // Código de inicialización que se ejecuta cuando se crea una instancia de la clase
        this.nombre = nombre
        this.edad = edad
    }
	
    
    fun mostrarInformacion() {
        println("Nombre: $nombre, Edad: $edad")
    }
}

```