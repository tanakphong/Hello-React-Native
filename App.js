/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
export default class App extends Component {
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
      }}>
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
          Hello, there!
        </Text>
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
          Hello, there!
        </Text>
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
          Hello, there!
        </Text>
      </View>
    );
  }
  /*render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>Hello, there test</Text>
      </View>
    );
  }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('hello', () => Bananas);
