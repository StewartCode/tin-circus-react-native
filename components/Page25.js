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
const textSize = width / 8 * 7;
const textHeight = height / 100 * 70;
const fontSizeAuto = height / 100 * 5.5;

export default class Page25 extends Component {

constructor(props){
  super(props);
  this.state = {
    isShowingText: true,
    pageNumber: 25,

  }
  this._onButtonClick = this._onButtonClick.bind(this)
}

_onButtonClick(){

  this.setState(() => {
  return {isShowingText: false}
 })

Alert.alert('you pressed the button')
}

componentDidMount(){
  this.props.pageNumberPass(this.state.pageNumber);
}

render() {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
            source={require('../images/Page25.jpg')}
            style={styles.logo}
            >
            <View style={styles.text}>
           <Text style={styles.textView}
             >As the show started they sat down to watch.
             There were elephants, clowns, strongmen and acrobats.
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
    top: textHeight,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  textView:{
    fontSize: fontSizeAuto,
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 1,
    width: textSize,
    height: height,
  }
});
