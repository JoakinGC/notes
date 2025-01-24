Forma básica para acceder a un [[fichero]] es con la [[clase]] [[File]]

Pero esta es la clase más básica pero tenemos clases especificas para poder leer y escribir un fichero de texto normal

Contamos con diferentes medios para interactuar con los datos:

- [[Stream]]
- [[Buffer]]
- [[Archivo]]
- [[Clases para Acceso a Datos]]

Java permite trabajar con tres diferentes de tipos de archivo además de directorios:

1. Fichero .bin
2. Fichero .txt
3. Fichero .json o .xml (Estos son variantes del .txt y depende de librerías externas)

Para archivos de texto tenemos la clase:

1. Write
	1. FileWrite
	2. BuferringWrite
2. Read
	1. FileRead
	2. BuferingRead


Para poder  trabajar con binarios tenemos:

1. StreamRead
	1. FileOutputRead
	2. DataOutputtRead
2. StreamWrite
	1. FileIinputWrite
	2. DataInputWrite

Para consultar de manera visual y mejor tenemos [[Clases para trabajar con ficheros.canvas|Clases para trabajar con ficheros]]

FileRead es una subclase de InputStreamread 

La clase StreaRead  es mas eficiente con los recursos que FileRead.

FileRead te lee con el formato del sistema, y InputStreamStream puedes cambiarle el formato a otros

Archivo de texto: es una secuencia de caracteres y espacios que contienen pocos meta datos o datos especiales(Ademas del formato).

La clase para poder ver si existe el archivo de texto es:

-  File
~~~Java
File ruta = new File("./archivoTexto.txt");

~~~

Este permite  buscar el archivo pero no permite trabajar con el para eso tenemos clases que heredan dentro del árbol de Java de File que es:

**FileWriter o FileRead**

~~~Java
FileRead leerArchivo = new FileRead("./archivoTexto.txt");

~~~

### Métodos de la clase FileRead().

	
Nombre|Funcion
--|--
read()|devuelve un caracter hasta que ya no haya nada en ese caso devuelve -1
read([]char)|Devuelve vector de bytes para mostrar mas letras en caso que no haya nada devuelve -1
read([]char , int off,int lengt)|Devuelve solo una parte de la letras desde donde le digamos


### Control de errores:

Para poder trabajar con el metodo read debemos tener en cuenta que puede haber errores entonces usamos el try catch y mas inportante a un debemos cerrar el recurso:

```JAVA
try{
	FileRead fR = new FileRead("ruta/archivo.txt");
	int indice;
	while(indice = fR.read() != -1){
		System.out.println((indice)char);		
	}

	/*Cierre de recurso*/
	fR.close();
}catch(IOXception e){
	e.printeft;
}catch(Exception e){
	System.err.println("Error: " + e.getMessage());
}

```


Es importante cerrar el recurso para evitar cualquier fallo si dejamos muchos recursos abiertos esta afectara a nuestro programa

Por eso JAVA nos permite controlar el cierre del recurso de mejor manera para no preocuparnos de ello:

```JAVA
try(FileRead fR = new FileRead("ruta/archivo.txt");){	

	FileRead fR = new FileRead("ruta/archivo.txt");
	int indice;
	while(indice = fR.read() != -1){
		System.out.println((indice)char);		
	}
}catch(IOXception e){
	e.printeft;
}catch(Exception e){
	System.err.println("Error: " + e.getMessage());
}
```

Y con esto ya cuando dejemos de usa fR se cerrar solo una vez terminado el try.

### Mejora de la clase FileRead() y FileWrite():

En este ámbito sale Stream() y podemos combinar con diferentes clases y brinda mas métodos a demás de trabajar de manera más eficiente que las clases menos especificas, usamos un try, catch para trabajar con lo errores:

~~~java
try(Stream st = new FileRead(new File("archivo.txt"))){

	st.read();


}catch(IOXception e){
	e.printeft;
}catch(Exception e){
	System.err.println("Error: " + e.getMessage());
}

~~~





