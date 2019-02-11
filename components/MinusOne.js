/* @flow */

//1.5

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  View,
  Animated,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class MinusOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text
              style={styles.text}
              > Tin Circus Development Build V 0.1
              </Text>
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
  text: {
    color: 'white'
  },
});
