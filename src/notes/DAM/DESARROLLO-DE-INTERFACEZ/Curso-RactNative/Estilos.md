Se puede dar estilos con la propiedad style se puede pasar un objecto nuevo ahi mismo con propiedades de csss en camelCase o otro objectivo difnido por nosotrosos


Usando StyleSheet:

```javascript
import { View,Text,StyleSheet } from "react-native";
import React from "react";

  

const styles = StyleSheet.create({

    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        color:'#09f',
        fontWeight:'bold',
        marginBottom:5
    }
})

  

const RepositoryItem =  (props) =>{
    return(
        <View
            style={styles.container}
            key={props.id}>
                    <Text style={styles.strong}>Id: {props.id}</Text>
                    <Text>FullName: {props.fullName}</Text>
                    <Text>Description: {props.description}</Text>
                    <Text>Languaje: {props.language}</Text>
                    <Text>Stars: {props.stargazersCount}</Text>
                    <Text>Forks: {props.forksCount}</Text>
                    <Text>Review: {props.reviewCount}</Text>
                    <Text>Rating: {props.ratingAverage}</Text>
                </View>
    );
};

  
export default RepositoryItem;
```


Una forma para reutilizar los estilos y crear componentes que generen diseño del mismo y que si queremos que use una propiedad o no se crear componentes pesonalizables:

```javascript
import React from "react";
import { Text,View,StyleSheet } from "react-native";

  
const style = StyleSheet.create({
    text:{
        fontSize:12,
        color:'grey'
    },
    bold:{
        fontWeight:'bold'
    },
    blue:{
        color:'blue'
    },

    big:{
        fontSize:20,
    },
    small:{
        fontSize:10
    }
});

  
  

export default function StyleText({blue,bold,children,big,small}){
    const testStyle = [
        style.text,
        blue && style.blue,
        bold && style.bold,
        big && style.big,
        small && style.small
    ];

  

    return(
        <Text style={testStyle}>
            {children}
        </Text>

    );

};
```

Cone sto definimos diferetes propeidades la propeidad style.text siempre saldra pero si las otras no son agregadas entonces no se agregaran:

```javascript
import { View,Text,StyleSheet } from "react-native";
import React from "react";
import StyleText from "./StyleText";

  

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        color:'#09f',
        fontWeight:'bold',
        marginBottom:5
    }
})

  

const RepositoryItem =  (props) =>{
    return(
        <View
            style={styles.container}
            key={props.id}>
                    <StyleText bold>Id: {props.id}</StyleText>
                    <StyleText blue>FullName: {props.fullName}</StyleText>
                    <StyleText bold>Description: {props.description}</StyleText>
                    <StyleText big>Languaje: {props.language}</StyleText>
                    <StyleText small>Stars: {props.stargazersCount}</StyleText>
                    <StyleText small>Forks: {props.forksCount}</StyleText>
                    <StyleText small>Review: {props.reviewCount}</StyleText>
                    <StyleText small>Rating: {props.ratingAverage}</StyleText>
                </View>
    );

};

  

export default RepositoryItem;
```


Para darle borde a un elemento se usa:

1. overFlow: hide
2. y despues borderRadius