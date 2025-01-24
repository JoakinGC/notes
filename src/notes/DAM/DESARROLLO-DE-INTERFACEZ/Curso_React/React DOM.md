Paquete que facilita la interaccion y actulizacion del DOM en aplicaciones REACT

Para poder renderizar un elemento se usa:

Para renderizar un elemento padre se usa el:

````jsx
import ReactDom from 'react-dom';//importacion de React DOM siempre para renderizar

const elemento = <h1>Hola</h1>;//elemento

ReactDOM.render(
	elemento,
	document.getElementById('root')
);
	  
````
