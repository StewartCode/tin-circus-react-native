/* @flow */

import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import {
  AppRegistry,
  Alert,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Page18 extends Component {

constructor(props){
  super(props);
  this.state = {
    isShowingText: true
  }
  this._onButtonClick = this._onButtonClick.bind(this)
}

_onButtonClick(){

  this.setState(() => {
  return {isShowingText: false}
 })

Alert.alert('you pressed the button')
}


render() {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
            source={require('../images/Page18.psd')}
            style={styles.logo}
            >
            <View style={styles.text}>
           <Text style={styles.textView}
             >By the time Sinclair had finished a long time had passed.
           </Text>
           <Text style={styles.textView}
             >His tummy was now rusty and his neck squeaked when he turned his head.
           </Text>
           </View>
         </ImageBackground>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  logoContainer:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width,
    height,
    resizeMode: 'contain'
  },
  text: {
    position: 'absolute',
    top: 290,
    left: 0,
    right: 0,
    bottom: 50,
    alignItems: 'center',
  },
  textView:{
    fontSize: 22,
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 1,
  }
});
