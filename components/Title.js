/* @flow */

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

export default class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
              source={require('../images/splashPage.psd')}
              style={styles.logo}
              />
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
    width: 500,
    height: 500,
    resizeMode: 'contain'
  },
});
