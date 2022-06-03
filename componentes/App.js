import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
  const [cep, setCep] = useState("");
  const [inputCep, setInputCep] = useState(0);
  
  async function buscaCep(){
    const response = await Api.get('ws/'+inputCep+'/json/');
    setCep(response.data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
          <Text style={styles.texto}>Digite seu CEP</Text>

          <TextInput 
            placeholder='ex: 11740000'
            keyboardType='numeric'
            style={styles.input}
            onChangeText={(data)=>setInputCep(data)}
          />

          <TouchableOpacity 
            style={styles.botao}
            onPress={buscaCep}
          >
              <Text style={styles.txtBotao}>Buscar</Text>
          </TouchableOpacity>

          <Cep data={cep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItems: 'center',
  },
  texto:{
    fontSize:20,
  },
  input:{
    width:'80%',
    marginLeft:'5%',
    borderBottomWidth:2,
    marginTop:20,
    fontSize:30
  },
  botao:{
    width:'80%',
    marginTop:30
  },
  txtBotao:{
    fontSize:20,
    textAlign:'center'
  }

});
