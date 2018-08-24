import React, {Component} from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Logo extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../images/logo_deverdie.png')}
        />
        <Text style={styles.subtitle}>Welcom to Deverdie</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{ 
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
  }, 
  logo:{
    width:281,
    height:64,
  }, 
  subtitle: {
    marginVertical:15,
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});
