Clase de ES6 que retorna un elemento JSX

![componente_declase.png](..\componente_declase.png)

Se debe difinir una funcion llamada render()

### Caracteristicas:

* Debe extender o heradar Reac.Component
* Debe contar con el método Render() para retornar un elemento jsx
* Puede recibir valores si es necesario

### Estructura

Contiene:

* Métodos
* Estados

Un método es una función asociada a un componente que puede acceder y usar estado.

### El método Render()

Método que retorna la estructura del componente de JSX. Ademas de ser obligatorio.

````jsx
class nombreDeComponenete extends React.Component{
	render(){
		return <p>Mi Componente</p>
	}
}

````

Normalmentes solo con render es suficnete y props pero si queremos controlar el estado usando [Hooks](Hooks.md) debemos usar el contructor para definirlo
