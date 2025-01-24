Podemos usar [tf](tf.md)  para crear tensores por defecto una vez asignado estos no cambian de valor en nuestro codigo

Pero tambien tenemos una variante que es costosa en cuanto recrusos lo mejor es que sea fija pero se puede usar:

````javascript
const tens = tf.tensor3d(val,[5,3,2],"int32"); //un tensor inmutable que no cambia

 ens.print();

//Tensor variable o que se puede cambiar el valor del tensor en la ejecucion del codigo

const x = tf.variable(tf.tensor([1,2,3]));//Usamos .variable
x.assign(tf.tensor([4,5,6]));

//Es mas costoso en cuanto recursos los vaiable

x.print();
````
