Objecto de tenseflow que cuenta con varios metodos pero los que veremos son:

- .tensor: Es la manera que tenemos para trabajar con [[Tensores]], el primer argumento es para pasar los datos y dependiendo de cuantas arrays pasamos es nuestra matriz debe ser de la misma dimensión o misma cantidad de elementos si no este fallarra, después tenemos form  o el argumento que le da nuestra forma a nuestro tensor le indicamos o forzamos a nuestros datos a que se muestren de una forma, y el ultimo argumento toma el tipo de dato que queremos guardar pero no son los usados en JS, por ejemplo el valor de entero seria "int32".

## Ejemplo de Uso:

```JavaScript
//tensor(shape es la dimension denuestro array, typo de array)

        tf.tensor([1,2,3,4]).print() // tensor peude recibir valores, formula y tipo;

        console.log(tf.tensor([1,2,3,4])); //muestra lo que tienen dentro del tensor

  

        tf.tensor([[1,2],[3,4]]).print();//tensor de dos dimensiones

        console.log(tf.tensor([[1,2],[2,2]]));//dos diemnsiones

  
  

        tf.tensor([[1.5,2],[2,2]],null,"int32").print();

        console.log(tf.tensor([[1.5,2],[1,2]],null,"int32"));

  

	     tf.tensor([1,2,3,4],[2,2]).print();//El segundo argumento le da la forma que deseamos si colocamos null se pondra por defecto

        //tf.tensor([[1,2,3,4,5],[2,2]]) Error ya que le mencionamos en el segundo arrray que es una matriz de 2 x 2 y hay 3 x 2


```


- .scalar: Es un numero del 1 al infinito. Solo trabajan con un valor:
```javascript
console.log(tf.scalar(3.14));//Se puede usar tambien tensor pero para mas leible se usa scalar para un solo valor
console.log(tf.tensor(3.14));//Hace lo lo mismo pero mala practica.
```


## Tensores y sus dimensiones:

Debemos colocar la dimension con la que trabjamao cuando usamos tensores para que sea ñas legible y saber con cual dimension  trabajamos:

```javascript
//tensores y sus dimensiones:

  

        //Si usamos un tensor de una dimension especifica solo sirve para esa dimension el limite es 6

        tf.tensor1d([1.5,2]).print();

        tf.tensor2d([[1.5,2],[1,5]]).print();

        tf.tensor3d([

            [

                [1,5],[1,5]

            ],

            [

                [1,5],[1,5]

            ],

            [

                [1,5],[1,5]

            ]

        ]).print();

        tf.tensor4d([

            [

                [

                    [1,5]

                ]

            ],

            [

                [

                    [1,5]

                ]

            ]

        ]).print();

  

        //Otro ejemplo de 3D

  

        const val = [];

        for(i = 0;i<30;i++){

            val[i] = Math.random(0,100);

        }

  

        tf.tensor3d(val,[5,3,2]).print();
```

El maximo es de 6 dimensiones