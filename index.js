	import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native'


const gerarNumeroAleatorio = () => {
	var numeros_randomicos = Math.random();
	numeros_randomicos = Math.floor(numeros_randomicos * 10);
	alert(numeros_randomicos);
}

const App = () => {

	return (
		<View>
		<Text>
		Gerador de números randomicos
		</Text>
		<Button title = "Gerar número randomico"
		onPress = {gerarNumeroAleatorio}
		/>
		</View>
	); 
};

AppRegistry.registerComponent('teste', () => App);
