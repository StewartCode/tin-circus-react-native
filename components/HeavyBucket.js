/* @flow */

import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import {
  AppRegistry,
  Alert,
  View,
  Animated,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Video from "react-native-video"
import OpeningVideo from "../videos/FlagAnimation.mp4"
import OpeningVideoAudio from "../audio/LogoAudio.mp3"

export default class HeavyBucket extends Component {

constructor(props){
  super(props);
  this.state = {
    isShowingText: true,
    frameValues: new Animated.Value(0),
    frames: []

  }
  this._onButtonClick = this._onButtonClick.bind(this)
}

componentDidMount() {
  Animated.timing(                  // Animate over time
    this.state.frameValues,            // The animated value to drive
    {
      toValue: 100,                   // Animate to opacity: 1 (opaque)
      duration: 5000,              // Make it take a while
    }
  ).start();                        // Starts the animation
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
        <Video
        source={OpeningVideo}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        />
        <Video
        source={OpeningVideoAudio}
        />
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
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
});
