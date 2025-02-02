Para poedr dar [Estilos](Estilos.md) en diferentes [React Router Native](React%20Router%20Native.md) o rutas se puede usar:

````javascript
import { Platform } from "react-native";

  
const theme = {
    appBar:{
        primary:'#24292e',
       textPrimary:'#fff',
        secondary:'#ccc'
    },
    colors:{
        textPrimary:'#24292e',
        testSecondary:'#586069',
        primary:'#0366d6',
        white:'#fefefe'
    },
    fontSize:{
       body:14,
        subheading:16
    },
    fonts:{
        main:Platform.select({
           ios:'Arial',
            android:'Roboto',
            default:'System'
        })
    },
    fontWeights:{
        normal:'400',
        bold:'700'
    }
}


export default theme;
````

En el theme en Reac Native viene por defecto Platfom que es un objeto que guarda en que sistema estamos actualmente.

Ahora imaginemos que tenemos un nav bar que contiene varias opciones y queremos que su diseño sea diferentes en casi todo en cada plataforma

Podemos hacerlo y tambien dar uno por defecto creando componentes específicos para cada uno y usando Plataform de React Native podemos conseguirlo:

````javascript
//App bar
import React from "react";
import {View,StyleSheet, ScrollView} from 'react-native';
import StyleText from "./StyleText";
import Constants from "expo-constants";
import theme from "../../theme";
import { Link, useLocation } from "react-router-native";

  
  

const AppBarTab = ({children,to}) =>{
    const {pathname} = useLocation();
    const active = pathname === to;
  
    const textStyles = [
        styles.text,
        active && styles.active
    ];

  

    return(
        <Link to={to}>
            <StyleText fontWeight='bold' style={textStyles}>
                {children}
            </StyleText>
        </Link>
    );
};

  
  
  
  

const AppBar = () =>{
    const {pathname} = useLocation();

  

    return(
        <View  style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab  to={'/'}>Repositories</AppBarTab>
                <AppBarTab  to={'/signin'}>Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
};

  
  

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:theme.appBar.primary,
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
    },
    text:{
        color:theme.appBar.secondary,
        paddingHorizontal:10        
    },
    scroll:{
        paddingBottom:15,
    },
    active:{
        color:theme.appBar.textPrimary
    },
});

  

export default AppBar;
````

La unica diferencia que tiene con ANDROIDAppBar es el color por lo que solo podnre esa pequeña diferencia y no todo el código:

````javascript
//ANDROIDAppBar


const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'red',// unica diferencia
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
    },

    text:{
        color:theme.appBar.secondary,
        paddingHorizontal:10        
    },
    scroll:{
        paddingBottom:15,
    },

    active:{
        color:theme.appBar.textPrimary
    },
});

  

export default AppBar;
````

Quedando en main de las igueitne manera usando Plataform:

````javascript
import React from "react";
import { Platform, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import { Routes, Route, Navigate } from "react-router-native";

  
  

const AppBar = Platform.select({
  android: () => require('./ANDROIDAppBar.jsx').default,
  default:() => require('./AppBar.jsx').default
})();

  

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
        <Routes>
            <Route path="/" element={<RepositoryList />}/>
            <Route path="/signin" element={<Text >Work it</Text>}/>
            <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
   </View>
  );
}


export default Main; // Cambia a export default Main;
````
