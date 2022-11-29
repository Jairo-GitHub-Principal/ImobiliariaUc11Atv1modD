

import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import Camera from './src/componentes/camera'; // componente camera para tirar fotos

import TelaInicial from './src/telas/TelaInicial';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "Home" component ={TelaInicial} />

      </Stack.Navigator>
      
     
    </NavigationContainer>
  );
}