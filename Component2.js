import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Component2 extends Component {
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
      }}>

      <BlinkText message="Learn State" interval={1000}/>

      </View>
    );
  }
}

class BlinkText extends Component {
  constructor(props){
    super(props)
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, this.props.interval);
  }

  render(){
    let display = this.state.isShowingText ? 'Hello, '+this.props.message+' !' : ' ';
    return(
        <Text style={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
          {display}
        </Text>
    );
  }
}
