import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Component1 extends Component {
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
      }}>

      <MyText></MyText>

      </View>
    );
  }
}

class MyText extends Component {
  render(){
    return(
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
          Hello, MyText !
        </Text>
    );
  }
}
