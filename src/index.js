/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button
} from 'react-native';

import Exemplo from './Exemplo'

const gerarNumeroAleatorio = () => {
  var numeros_randomicos = Math.random();
  numeros_randomicos = Math.floor(numeros_randomicos * 10);
  alert(numeros_randomicos);
}

const App = () => {

  return (
    <SafeAreaView>
      <View>
        <Text>
          Gerador de números randomicos
		    </Text>
        <Button title="Gerar número randomico"
          onPress={gerarNumeroAleatorio}
        />
        <Exemplo/>
      </View>
    </SafeAreaView>
  );
};


export default App;
