import * as React from 'react';
import { View, Text, Button, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { telaDeCadastrostilo, containerTelaCadastro, imagensCasas, textTelaDeCadastro, botao, telaInicial } from '../stilos/estilos';


//import Cadastro from './TelaCadastro';
import ListarImovel from './TelaListagem';

import TelaDeCadastro from '../telas/TelaCadastro';


// tela de teste





function TelaHome({ navigation }) {
    return (


        <View style={telaInicial.containerTelaInicial}>

            


            <View style={{ flex: 1, marginTop: '50%' }}>
                <View style={botao.viewBotao}>
                    <TouchableOpacity style={botao.botaoCadastrar} onPress={() => navigation.navigate("cadastrarImovel")}>
                        <Text style={botao.textBotao}>Cadastrar imóveis </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 5 }}>
                <View style={botao.viewBotao}>
                    <TouchableOpacity style={botao.botaoCadastrar} onPress={() => navigation.navigate("listar")}>
                        <Text style={botao.textBotao}>Listar imóveis </Text>
                    </TouchableOpacity>
                </View>
            </View>


            
           



        </View>


    );
}


const Stack = createNativeStackNavigator();

function TelaInicial() {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Home" component={TelaHome} options={{ title: 'Imobiliária ', headerStyle: { backgroundColor: '#483d8b' }, headerTintColor: '#cd5c5c' }} />
            <Stack.Screen name="cadastrarImovel" component={TelaDeCadastro} />
            <Stack.Screen name="listar" component={ListarImovel} />
          




        </Stack.Navigator>

    );
}

export default TelaInicial;