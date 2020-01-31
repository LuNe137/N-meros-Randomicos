import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default class src extends Component {
  state = {
    contador: 2,
    name: 'Luiz',
  }

  exemploFunction = () => {
    let { contador, name } = this.state
    alert(name)
  }

  render() {
    let { contador } = this.state
    return (
      <View>
        <Text style={{ fontSize: 22, alignSelf: 'center' }}>{contador}</Text>
        <Button title='teste' onPress={() => this.setState({ contador: contador + 1 })} />
      </View>
    )
  }
}
