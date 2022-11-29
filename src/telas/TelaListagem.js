import React,{Component} from "react";
import {View,ScrollView,Text, Image, TouchableOpacity} from 'react-native';

// responsividade
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

// estilos
import { imagensCasas,telaDeCadastrostilo,containerTelaCadastro,textTelaDeCadastro,botao,telaInicial,listagem } from "../stilos/estilos";

// DataBase
import ItemDatabase from "../database/ItemDatabase";




class ListarImovel extends Component{
    constructor(props){
        super(props)
        this.state={
            listaDeImoveis:[]
        }
        this.ListarImoveiCadastrados()
    }
    ListarImoveiCadastrados =()=>{
        const DB = new ItemDatabase()
        DB.Listar().then(listaCompleta => {this.setState({listaDeImoveis:listaCompleta})})

    }
    render(){
        return(
            <ScrollView style={containerTelaCadastro.preenchimentoFundoScrollView} >
                {
                    this.state.listaDeImoveis.map(elementoLista =>(
                <View style={containerTelaCadastro.preenchimentoFundoView}>
                    
                             
                    
                    
                    
                    <View style={listagem.imgLisatagem}>
                        
                        <Image style={listagem.imgLisatagem}></Image>
                    </View>


                    <View style={listagem.viewListaAtributosImoveis}>
                    <Text style={listagem.textAtributosListaImoveis}> Tipo: {this.props.tipo = elementoLista.tipo}</Text>
                    
                    
                    
                    <Text style={listagem.textAtributosListaImoveis}> Endereço: {this.props.endereco = elementoLista.endereco}</Text>
                   
                    
                   
                    <Text style={listagem.textAtributosListaImoveis}> Finalidade: {this.props.finalidade = elementoLista.finalidade}</Text>
                   
                    
                   
                    <Text style={listagem.textAtributosListaImoveis}> Valor R$: {this.props.valor = elementoLista.valor}</Text>
                    </View>


                    <View style={{marginBottom:90}}>
                        </View>    
                    
                </View>
               

                ))
                    }
            </ScrollView>
        );
    }
}


export default ListarImovel;