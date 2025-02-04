
````javascript
//App
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Main from './src/components/Main'; 
import { NativeRouter } from "react-router-native";

  

export default function App() {
  console.log("HOLA");
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}

//Main
import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList"; // Elimina ".jsx"
import AppBar from "./AppBar"; // Elimina ".jsx"
import { Routes, Route, Navigate } from "react-router-native";

  

const Main = () => {
  return (
    <View style={
                    { 
                        flex: 1
                    }
                }>
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
