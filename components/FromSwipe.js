import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FromSwipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.pass
    }
  }


  componentDidMount(){
    this.setState(() => {
      return {text: this.props.pass}
    })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm the FromSwipe component {this.props.pass}</Text>
        <Text style={styles.text}>1111{this.state.text}1111</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 56,
  }
});

AppRegistry.registerComponent('FromSwipe', () => FromSwipe);
