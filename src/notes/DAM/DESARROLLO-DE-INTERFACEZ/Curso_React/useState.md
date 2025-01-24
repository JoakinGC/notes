Es un [Hooks](Hooks.md)  que permite darle estado a un [Componente Funcional](Componente%20Funcional.md)

## ¿Cómo se usa?

El useState se importa y se usa un arreglo que contiene la variable que contiene ese valor, y luego la funcion que lo cambia la variable:

````jsx
import {useState} from 'react';

	const [variable,setVaraible] = useState("Valor inicial de cualquier tipo(int,string"));
````
