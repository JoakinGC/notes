El atributo Style permite pasarle un objecto de JavaScript con propiedades css con [[CamelCase]]

Ej:

```css
background-color:red;
font-family
```

en [[JSX]]: 

```jsx
backgroundColor
fontFamily
```

Ejeplo de un objecto en [[JSX]] con estilos:

```jsx
//DEfiniendo el estilo
const estiloDiv = {
	color:'yellow',
	backgroundColor:'black'
};


//Usando los estilos:
<div style={estiloDiv}>¡Hola, Mundo!</div>

//Usar estilo especifico:
<div style={/*Aqui va JS*/{/*El objecto con estilos*/color: 'yellow'}}>¡Hola ,Mundo!<div>
```


El style forma parte de los [[Atributos React]]