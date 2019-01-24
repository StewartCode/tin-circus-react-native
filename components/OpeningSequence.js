/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Video from "react-native-video"
import OpeningVideo from "../videos/openingSequenceRain.mp4"
import OpeningVideoAudio from "../audio/rainFx.mp3"

export default class OpeningSequence extends Component {
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
    backgroundColor: "black"
  },
});
