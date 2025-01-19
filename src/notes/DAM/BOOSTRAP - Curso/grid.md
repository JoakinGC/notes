clases que se usan en la grid son las siguientes:

- .row
- .col
- .col-sm-
- .col-md-
- col-lg-
- col-xl-


### Row 

es una fila

### Col

es una columan dentro de una fila

Las demas variantes de col son otro col para diferentes dimensiones

- xs: Exta pequeño
- sm: small pequeño
- md: mediano
- lg: extra large / muy grande
- xxl: muy grande

Son puntos que podemso cambir los estilos de cada pantalla

Estos son puntpos de pixeles de la pantalla tambien llamado viewport.

## Breakpoint

Cada breakpoint es una dimension es que podemos cambiar el estilo o tamaño o alincacion de esos elementos

![[breakpoints.png]]

Cuando usas col normal por defecto es xs

Y para cambiar por otro breakpoints tenemos sm, md:
col-sm; col-md

### Container

Un contenedor contiene 12 columnas

Es una clase que contiene todas las filas

Clases de contenedor:

- .container
- container-fluid

### Container

Crea un ancho fijo que depende del tamaño de la pantalla o ventana

### Container-fluid

Llena el 100% del ancho posible 

#### Tipos de Contenedores:

- container-sm
- container-md
- container-lg
- container-xl
- container-xxl

Lo mismo que lo de col sm mas pequeño a mas grande podemosa usar cada uno hasta que llegue a su breakpoint o punto de quiebre que espeficquemos

Si agregamos la clase text-center te centra el texto

## Componentes

Elemento HTML reutilizable que ya viene con un estilo predeterminado en BS

Igual se puede personalizar.

En BS tenemos componetens con el codigo que muestra como 

[Accordion · Bootstrap v5.3 (getbootstrap.com)](https://getbootstrap.com/docs/5.3/components/accordion/)


## Iconos

BS cuenta con su propia libreria de SVG de imagenes de iconos

## Flex BOS BS
Se distruye un contenedor dependiendo del tamaño de la clase

BS ya viene con clases determinadas para poder usarlas

Clases que se usan

1. .d-flex añade a un contenedor ya la capacidad de flexbox 

### Propiedad de flex box

- flex-direction: El ejec principal de la direccion de los elementos. Valores posibles:
	- row
	- row-reverse
	- column
	- column-reverse
- justify-content: Como se distrubuyen los elementos en el eje principa. Valores:
	- flex-start
	- flex-end
	- center
	- space-between
	- space-around
	- space-evenly
	Estas son los valores de la clase pero hay clases en BS que simplifican esto y es cuestión de solo calocarlo al elemento:
		- .justify-content-start
		- .justify-content-end
		- .justify-content-center
		- .justify-content-between
		- .justify-content-around
		- .justify-content-evenly
- align-items: Define como se aliena los elementos del eje secundario. Valores:
	- flex-start
	- flex-end
	- center
	- baseline
	- stretch (ocupan en todo su eje secundario) 
	Clases que viene en BS para simplificar sus valores:
		- .aling-items-start
		- .aling-items-end
		- .aling-items-center
		- .aling-items-baseline
		- .aling-items-stretch
- flex-wrap: Determina si los elementos dentro un contenedor deben cambiar de columna o fila dependiendo de cual es el eje principal. Valores:
	- nowrap(por defecto)
	- wrap
	- wrap-reverse
	- Clases en BS:
		- .flex-nowrap(por defecto)
		- .flex-wrap
		- .flex-wrap-reverse

Se puede experimentar con bostrarpp colocando diferentes estilos en tiempo real para ver como queda entonces ahí podemos usar y probar