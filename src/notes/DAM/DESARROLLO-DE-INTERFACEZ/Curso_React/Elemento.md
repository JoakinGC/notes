Unidades más pequeñas en [React](React.md). Definen lo que se ve en la pantalla

### Elemento vs [Componente de Clase](Componente%20de%20Clase.md) vs [Componente Funcional](Componente%20Funcional.md)

La complejidad de componente es mayor. Un componente puede crear o renderizar otros componentes.

En cambio los elementos son muchos mas básicos

Los elementos están dentro de componentes por lota tanto un compnenente puede contener muchos elementos al a vez

### Elementos HTML

Con [JSX](JSX.md) podemos crear y usar cualquier elemento HTML en el mismo

#### ¿Cómo reconocerlos?

para poder reconocer un elemento de HTML se representa con etiquetas en letras minúsculas

## Atributos

Cualquier elemento de JSX puede tener atributos para especificar ciertas características a los mismos. Tenemos los atributos normales de HTML y los personalizados

Ej:

El atributo clase en HTML:

````html
<h1 class="titulo-azul">Azul</h1>
````

El atirubto class en JSX:

````JSX
<h1 className="titulo-azul">Azul</h1>
````

El porque esto se debe a que en JS tenemos  la palabra reservada "class" para hacer clases por eso se cambio la forma en la que se coloca el atributo

El atributo "for":

````html
<label for="css">CSS </label>
````

Con  jsx:

````jsx
<lebel htmlFor="css">CSS</label>
````

## Elemento padre

Se usa un lemento o div o elemneto html que conetega a todos los elementos o [Componente Funcional](Componente%20Funcional.md)

Generalemnte se coloca un id llamado "root" y para poder ver un elemento usamos [React DOM](React%20DOM.md)
