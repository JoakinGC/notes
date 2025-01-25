Debemos ser muy cuidadosos con esto ya que el uso de un navegador como Google Chrome consume mucha memoria ram y ya teseflow usa web gl que consume mas  nuestra IA esto puede colarasar la memoria de nuestro cliente.

web gl usa tensoflow

Por eso se creo una funciones ([tf](tf.md))para poder manejar la memoria o los tensores:

* tf.memory().numTensors: Muestra el numero de [Tensores](Tensores.md) que se usan en nuestro programa
* .dispose(): Detienen un tensor de tipo inmutable de tipo variable no funciona
* .tidy(): todos los tensores hecho dentro de este se ejecutan el método dispose() autmaticamnte.

Código de ejemplo de uso con una libreria externa:

````javascript
//Ejemplo de uso de memoria usando  p5 .js

    function  draw(){

        const val = [];

        for(i = 0;i<30;i++){

            val[i] = Math.random(1,100) * 100;

        }

  

        const tens = tf.tensor3d(val,[5,3,2],"int32");

        //tens.print();

  

        //const x = tf.variable(tf.tensor([1,2,3]));

        //x.print();

        //x.assign(tf.tensor([4,5,6]));

        //x.dispose();//No funcioan con tensores variables

        //x.print();

  

        const a = tf.tensor2d([[1,2,-3],[4,0,-2]]);

        const b = tf.tensor2d([[3,1],[2,4],[-1,5]]);

        const mul = tf.matMul(a,b);

  

        tens.dispose();

        a.dispose();//detiene el tensor

        b.dispose();

        mul.dispose();

  

        //otra forma es usando tidy

  

        tf.tidy(() =>{

            const c = tf.tensor2d([[1,2,-3],[4,0,-2]]);

            const d = tf.tensor2d([[3,1],[2,4],[-1,5]]);

            const mul2 = tf.matMul(c,d);

            //Se hace automatico el dispose dentro del mismo

        })

        console.log(tf.memory().numTensors);

    }
````
