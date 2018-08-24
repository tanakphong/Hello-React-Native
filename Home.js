import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#0087a2"
          barStyle="light-content"/>
        <Signup/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b7d3',
  },
});
