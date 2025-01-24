Para multiplciar [Tensores](Tensores.md) debemos usar el modulo [tf](tf.md)  y su meodo.matMul(tensores).

````javascript
//Multiplicar tensores:
const a = tf.tensor2d([[1,2,-3],[4,0,-2]]);
const b = tf.tensor2d([[3,1],[2,4],[-1,5]]);

 tf.matMul(a,b).print();//ab
````
