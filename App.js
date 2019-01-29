

import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View} from 'react-native';
import Test from './containers/Test'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import TinCircus from './containers/TinCircus'

const { width, height } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super();
    this.state = {
      direction: null,
      backgroundColor: '#fff',
      pageNumber: 1,
      requiredSwipeSpeed: 0.3,
    };
    this.swipeLeftSetState = this.swipeLeftSetState.bind(this);
    this.swipeRightSetState = this.swipeRightSetState.bind(this);

  }

  onSwipeUp(gestureState) {
    this.setState({direction: 'down'});
  }

  onSwipeDown(gestureState) {
    this.setState({direction: 'up'});
  }

  onSwipeLeft(gestureState) {
    this.swipeLeftSetState(gestureState);
  }

  onSwipeRight(gestureState) {
    this.swipeRightSetState(gestureState);
  }

  swipeLeftSetState(gestureState){
    this.setState({direction: 'right'});
  }

  swipeRightSetState(gestureState){
    this.setState({direction: 'left'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }


  changeDirectionToNull = (newState) => {
    this.setState({
      direction: null,
    })
  }

  pageNumberToApp = (x) => {
    this.setState({
      pageNumber: x,
    })
  }



  render() {

    console.log('this is the page number in app',this.state.pageNumber);
    console.log('this is the swipespped',this.state.requiredSwipeSpeed);

    const config = {
      velocityThreshold: this.state.requiredSwipeSpeed,
      directionalOffsetThreshold: 180
    };

    return (


   <GestureRecognizer
     onSwipe={(direction, state) => this.onSwipe(direction, state)}
     onSwipeUp={(state) => this.onSwipeUp(state)}
     onSwipeDown={(state) => this.onSwipeDown(state)}
     onSwipeLeft={(state) => this.onSwipeLeft(state)}
     onSwipeRight={(state) => this.onSwipeRight(state)}
     config={config}
     style={{
       flex: 1,
       backgroundColor:  "black" //this.state.backgroundColor
     }}
     >
      <View style={styles.container}>
       <TinCircus
         direction={this.state.direction}
         upStreamToApp={this.changeDirectionToNull.bind(this, null)}
         forwardsFromApp={null}
         pageNumberToApp={this.pageNumberToApp.bind(this, null)}
       />
      </View>
    </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow : 1,
    width,
    height,
    resizeMode: 'contain',
  },
   swipe: {

   }
});
