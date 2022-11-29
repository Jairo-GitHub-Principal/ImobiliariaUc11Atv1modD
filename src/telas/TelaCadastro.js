import React, { Component,PureComponent } from "react";
import { ScrollView, View, Text, Image,TouchableOpacity, AppRegistry, StyleSheet,  } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { telaDeCadastrostilo, containerTelaCadastro, imagensCasas, textTelaDeCadastro,botao } from '../stilos/estilos';


// model
import imovel from "../model/imovel";

// database
import ItemDatabase from "../database/ItemDatabase";

// lista de imovel
import ListarImovel from './TelaListagem'

// camera
import { RNCamera } from 'react-native-camera';
import Camera from "../componentes/camera";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";



function Camera1(){
    return(
    <Camera/>
    )
} 
const Stack = createNativeStackNavigator();

class Cadastro extends Component {

    constructor(props){
        super(props)

        // vetor tipos
        
        // states
        this.state={
            anuncio_image:'',
            tipo:'',
            endereco:'',
            finalidade:'',
            valor:'',
            listaImoveis:[]
        }
    }

    Cadastrar = (tipo,endereco,finalidade,valor)=>{
        const novoImovel = new imovel(tipo,endereco,finalidade,valor);
        const DB = new ItemDatabase();
        DB.Inserir(novoImovel);
       // this.state.listaImoveis.push(novoImovel);
        //this.forceUpdate();
        
    }
    
    
    
   
    

    

    render() {
        const imgCasa1 = require('../img/house-1477041_640.jpg')
       

        return (

            <ScrollView style={containerTelaCadastro.preenchimentoFundoScrollView}>
                <View style={containerTelaCadastro.preenchimentoFundoView}>

                    <View><Text style={telaDeCadastrostilo.titulo}>Cadastro de imoveis</Text></View>

                    <View>
                    
                        
                        <TouchableOpacity 
                      
                        >
                        <Image source={imgCasa1} />
                        </TouchableOpacity>
                    </View>

                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Tipo de imóveu</Text>
                        <TextInput 
                        onChangeText={(valorDigitado)=> this.setState({tipo:valorDigitado})}
                        style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>


                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Endereço do imóveu</Text>
                        <TextInput
                        onChangeText={(valorDigitado)=> this.setState({endereco:valorDigitado})}
                         style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    
                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Finalidade do anuncio</Text>
                        <TextInput
                        onChangeText={(valorDigitado)=> this.setState({finalidade:valorDigitado})}
                         style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    
                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Valor em R$</Text>
                        <TextInput
                        onChangeText={(valorDigitado)=> this.setState({valor:valorDigitado})}
                         style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    <View style={botao.viewBotao}>
                        <TouchableOpacity 
                        onPress ={()=> this.Cadastrar(this.state.tipo,this.state.endereco,this.state.finalidade,this.state.valor)}
                        style={botao.botaoCadastrar}>
                            <Text style={botao.textBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View>
                        <Text>lista de imoveis</Text>

                        {
                            this.state.listaImoveis.map(elementoLista => (
                                <ListarImovel
                                tipo ={elementoLista.tipo}
                                endereco={elementoLista.endereco}
                                finalidade = {elementoLista.finalidade}
                                valor ={elementoLista.valor}
                                
                                />


                            ))
                        }
                    </View>

                    <View>
                        <Text></Text>
                    </View>

                </View>


            </ScrollView>
        );
    }
}


export default Cadastro
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });