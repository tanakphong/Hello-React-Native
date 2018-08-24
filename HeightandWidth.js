import React, {Component} from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeightandWidth extends Component {
  render(){
    return(
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
