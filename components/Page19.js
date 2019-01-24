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

export default class Page19 extends Component {

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
            source={require('../images/Page19.psd')}
            style={styles.logo}
            >
            <View style={styles.text}>
           <Text style={styles.textView}
             >Mr Caruthers was now very old but when Sinclair told him to look out the window
           </Text>
           <Text style={styles.textView}
             >he got to his feet, even though his knees popped and his legs creaked.
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
    color: "black",
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textShadowColor: 'rgba(255, 255, 255, 255 )',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 1,
  }
});
