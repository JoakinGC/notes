Son capas que trabajan diferentes partes de nuestro datos para conseguir patrones

[A Neural Network Playground (tensorflow.org)](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.76436&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false)

Tenemos dos partes la entrada y salida

Al tratar en capas creamos nuestros modelos con cierta cantidad de valores de entrada

Por detrás tenemos diferentes números de redes neuronales para poder trabajar con los datos cada capa, y
la ultima de salida que son los valores que devuelve

Ejemplo en código de entrada:
```javascript
const modelo = tf.sequencial();//Declaramos neustro modelo        

//Entrada de 4 nodos con 2 entradas(inputs) y activacion sigmod
const oculta = tf.layers.dense({
	units:4,
	inputShape:[2],
	activation:"sigmod"
});

modelo.add(oculta);//agregamos la entrada a nuestro modelo
```

Código de salida:

```javascript
//Salida
const salida = tf.layers.dense({
	units:1,
	inputShape:[4],//por defecto entiende que son 4 de salida.
	activation:'sigmid'
});

modelo.add(salida);//agregamos la salida a nuestro modelo
```

Con esto tenemos agregado todo a nuestro modelo con 2 input y cuatro de salida, pero hace falta un optimizar para poder ayudar el desempeño de nuestro modelo:

```javascript
//Optimizador
const sgdOpciones = tf.train.sgd(0.1);

modelo.compile({
	optimizer:sgdOpciones,
	loss:tf.losses.meanSquaredError
});
```

Hay mas opciones de nosotros usamos sgd y le pasamos a nuestro modelo una funcion de perdida

Quedando con todo el codigo asi:
```javascript
const modelo = tf.sequencial();//Declaramos neustro modelo        

//Entrada de 4 nodos con 2 entradas(inputs) y activacion sigmod
const oculta = tf.layers.dense({
	units:4,
	inputShape:[2],
	activation:"sigmod"
});

modelo.add(oculta);//agregamos la entrada a nuestro modeloç

//Salida
const salida = tf.layers.dense({
	units:1,
	inputShape:[4],//por defecto entiende que son 4 de salida.
	activation:'sigmid'
});

modelo.add(salida);//agregamos la salida a nuestro modelo

//Optimizador
const sgdOpciones = tf.train.sgd(0.1);

modelo.compile({
	optimizer:sgdOpciones,
	loss:tf.losses.meanSquaredError
});

```

Pero esto no es suficiente ya que no le pasamos datos para que muestre algo, usando [[Tensores]]  pasamos datos de entrada y datos que no estan completos peor basandose en el primer tensor puede sacar el segundo tensor:

```javascript
//Cracion de datos que conocemos:
const x1 = tf.tensor2d([
	[0,0],
	[0.2,0.2],
	[0.4,0.4]
]);

//Cracion de datos que NO conocemos:
const x2 = tf.tensor2d([
	[0.1],
	[0.3],
	[0.5]
]);

async function  intento(){
	for(i = 0; i < 500;i++){
		const respuesta = await modelo.fit(x1,x2,{shuffle:true,epochs:100});
		console.log(respuesta);
		console.log(respuesta.history.loss[0]);//Lo perdido siempre debe ser lo mas cercano a 0 y por eso se debria aumentar el numero de repeticiones
	}
}

intento()
.then(() =>{
	const salida = modelo.predict(x1);
	salida.print();
});
```