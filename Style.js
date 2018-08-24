import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Style extends Component {
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
