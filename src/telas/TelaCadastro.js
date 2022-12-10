import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { telaDeCadastrostilo, containerTelaCadastro, imagensCasas, textTelaDeCadastro, botao, telaInicial } from '../stilos/estilos';


import Cadastro from '../componentes/Cadastro';




const Stack = createNativeStackNavigator();

function NavegacaoCadastro() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false } } >
           
          
           <Stack.Screen name= "Cadastro" component={Cadastro}/>
            


        </Stack.Navigator>

    );
}

export default NavegacaoCadastro;




