import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#ffffff"/>

        <TextInput style={styles.inputBox} 
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"/>

        <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}> Login </Text>
       </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{     
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width:281,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:8,
  },
  button:{
    width:281,
    backgroundColor:'#0087a2',
    borderRadius:25,
    paddingVertical:14,
    marginVertical:16,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  }
});
