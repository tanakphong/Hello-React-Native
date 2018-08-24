import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <Text style={styles.signupButton}> Sign in</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupTextCont:{
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical:16,
        flexDirection:'row',
    },
    signupText:{
        color: 'rgba(255,255,255,0.6)',
        fontSize:16,
    },
    signupButton:{
        color: '#ffffff',
        fontSize:16,
        fontWeight:'500',
    }
});
