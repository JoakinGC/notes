Para acceder a un tensor creado por el mudolo de [tf](tf.md) tenemos el método:

* .data(): Este devuelve una promesa por lo debemos usar los metodos de la asincorniaz de js para poder usarlo ej:

````javascript
const val = [];

for(i = 0;i<30;i++){
	val[i] = Math.random(1,100) * 100;
}

const tens = tf.tensor3d(val,[5,3,2],"int32"); //un tensor inmutable que no cambia
tens.print();

console.log(tens.data()); //Devuevle una promesa, el metood data devuevle los datos

//Si es una promesa debemos tratarla con asincronia o then ya que tarda una cierta cantidad de tiempo para devolver los datos
 tens
.data()
.then(res => console.log(res));
//Esto devuelve ahora si todos los datos y podemos hacer diferentes operaciones

  

console.log(
	tens.dataSync() //metodo senciollo que devuelve los datos una vez sincronizado
);

  
//para acceder a un solo valor:
tens
.data()
.then(res => console.log(res[2]));
````
