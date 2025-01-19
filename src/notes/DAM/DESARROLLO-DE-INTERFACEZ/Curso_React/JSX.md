0###  ¿Qué es?

Es una extensión directa para sintaxis de JavaScript

Nos permite describir como se ven los componentes en nuestro HTML, solo su estructura no necesariamente sus estilos

### Ventajas de JSX:

- Estructura más fácil de visualizar
- Errores y advertencias más útiles.

JSX es opcional no es obligatorio pero ayuda mucho

```jsx
const elemento = <h1>¡Hola, munod!</h1>;
```

Otro ejemplo:

```jsx
import React from 'react';
import '../hojas-de-estilo/Contador.css';


function Contador({numClics}){
	return(
		<div className="contador">
			{numClics}
		</div>
	);
}

export default Contador;
```

```jsx
import React from 'react';
import '../hojas-de-estilo/Contador.css';

const BotonClear = (props) => (
	<div className="boton-clear" onClick={props.manejarClear}>
		{props.children}
	</div>
);

export default Contador;
```

## Importar codigo JS en nuestro programa

Se puede combinar [[Elemento]] o etiquetas html con js:

```jsx
let adjectivo = "Interesante";

<p>React es {adjectivo}</p>
<p>Es {5 * 6}</p>
<p>React es {adjectivo.toUpperCase()}</p>
```