import React, { useState } from 'react';
import { Button, View, StyleSheet, Image , TextInput, Text} from 'react-native';
import Dratini from './assets/components/Dratini';
import Aggron from './assets/components/Aggron';
import Styles from './styles/Styles';
import Pokemon from './assets/components/Pokemons';

export default function App() {
  //const [myText, setMyText] = useState('');


  return (
    <View style={Styles.container}>
      <Pokemon/>
        {/*<View>
          <Text>ENTRADA:</Text>
          <TextInput value={myText} onChangeText={text => {setMyText(text)}}/>

          <Text>SAIDA:</Text>
          <Text>{myText}</Text>
        </View>*/}
    </View>
  );
}

/*
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#3174e8",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 200,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  childContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    width:300,
    height:455,
    margin:20,
    padding:20
  }
});
*/