Es una lbireria gratuita que ayuda crear formularios facilmente

Formik se importa

primero debemos decirle nuestro valores iniciales:

````javascript

const initialValues = {
    email:'',
    password:''
};
````

Importamos Formik después de instalarlo en nuestro proyecto con NPM

````javascript
import {Formik} from 'formik';
````

Nosotros no podemos usar muchos componentes que ya viene  en base en Formik por qué te falla al hechos con HTML pero si podemos usar la forma de gestion por detras que tiene formik para usarlo en React Native:

````javascript
import React from "react";
import {Formik} from 'formik';
import {  Button, View,StyleSheet } from "react-native";
import StyleTextInput from "../components/StyleTextInput";

  

const initialValues = {
    email:'',
    password:''
};

export default function LogIn(){
    return(
       <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
            {(  {handleChange,handleSubmit,values} ) => {
                return (
                    <View style={styles.form}>
                        <StyleTextInput
                            placeholder="E-mail"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <StyleTextInput
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                        <Button onPress={handleSubmit}title="Log In"></Button>
                    </View>
                );
            }}
        </Formik>
    );
};

const styles = StyleSheet.create({
    form:{
       margin:12
    }
});
````

Creamos un componente personalizado que adentro contiene estilos nuestro y input, además colocamos Formik y dentro del mismo devolvemos una función con todo el cuerpo de nuestro formulario ya que antes de los [Hooks](../Curso_React/Hooks.md)  se realiza de esta manera.

Otras nuevas formas de hacer esto es con hoks nuevo *useForm* o para ahorrar rendimiento [DESARROLLO-DE-INTERFACEZ/Curso_React/useState](../Curso_React/useState.md).
