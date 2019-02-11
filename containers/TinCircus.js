import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import MinusOne from '../components/MinusOne'
import HeavyBucket from '../components/HeavyBucket'
import SplashScreen from '../components/SplashScreen'
import OpeningSequence from '../components/OpeningSequence'
import SomeComponent from '../components/SomeComponent'
import FromSwipe from '../components/FromSwipe'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import Title from '../components/Title'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import Page6 from '../components/Page6'
import Page7 from '../components/Page7'
import Page8 from '../components/Page8'
import Page9 from '../components/Page9'
import Page10 from '../components/Page10'
import Page11 from '../components/Page11'
import Page12 from '../components/Page12'
import Page13 from '../components/Page13'
import Page14 from '../components/Page14'
import Page15 from '../components/Page15'
import Page16 from '../components/Page16'
import Page17 from '../components/Page17'
import Page18 from '../components/Page18'
import Page19 from '../components/Page19'
import Page20 from '../components/Page20'
import Page21 from '../components/Page21'
import Page22 from '../components/Page22'
import Page23 from '../components/Page23'
import Page24 from '../components/Page24'
import Page25 from '../components/Page25'
import Page26 from '../components/Page26'
import Page27 from '../components/Page27'
import {
  View,
  Text,
  Alert,
  AppRegistry,
  StyleSheet,
  Dimensions,
} from 'react-native';

import soundfile1 from '../audio/pageTurnFast.wav'
import soundfile2 from '../audio/pageTurnSlow.wav'
import soundfile3 from '../audio/rainFx.mp3'


const { width, height } = Dimensions.get('window');
const textSize = width / 2;
const buttonHeight = height / 100 * 4.5
const buttonWidth = width / 100 * 15
const gap = width / 100 * 70


export default class TinCircus extends Component {



constructor(props) {
  super(props);
  this.state = {
    pageNumber: 1,
    direction: this.props.direction,
    back: null,
    forwards: this.props.forwardsFromApp,
    pageNumberFromPage: null,
  };
  this._onButtonClick = this._onButtonClick.bind(this)
  this._onBackClick = this._onBackClick.bind(this)
  this.twoClicksForwards = this.twoClicksForwards.bind(this)
  this.twoClickBackwards = this.twoClickBackwards.bind(this)
  this.upstreamForwards = this.upstreamForwards.bind(this)
  this.delayOnOne = this.delayOnOne.bind(this)
}


_onButtonClick(){
  let prevPage = this.state.pageNumber
  this.setState(() => {
    return {pageNumber: prevPage + 1
           }
  })
}
_onBackClick(){
  let prevPage = this.state.pageNumber
  this.setState(() => {
    return {pageNumber: prevPage - 1
           }
  })
}

twoClicksForwards(){
   this._onButtonClick();
   this.upstreamForwards();

}

twoClickBackwards(){
   this._onBackClick();
   this.upstreamForwards();

}

delayOnOne(){
  if(this.state.pageNumber === 1){
    {this.setState({pageNumber: 1.5})}
  }
}

delayOnOnePointFive(){
  if(this.state.pageNumber === 1.5){
    {this.setState({pageNumber: 2})}
  }
}

delayThree(){
  if(this.state.pageNumber === 3){
    {this.setState({pageNumber: 4})}
  }
}

delayTwentyNine(){
  if(this.state.pageNumber > 28 ){
    {this.setState({pageNumber: 2})}
  }
}

setPageToTwo(){
  {this.setState({pageNumber: 2})}
}

upstreamForwards(){
  this.props.upStreamToApp();  //resets swipe direction to null
}


pageNumberPass(x){
console.log('wtf is this????',x);
}


componentDidUpdate(prevState){
  if(this.props.direction === 'right'){
      this.twoClicksForwards();
  }
  if(this.props.direction === 'left'){
      this.twoClickBackwards();
  }
}

componentDidMount(){
  this.props.pageNumberToApp();
}

  render() {

    console.log("find me", this.props.direction);

    if(this.state.pageNumber < -1){
      this.setPageToTwo()
    }

    if(this.state.pageNumber > 28){
      setTimeout(() => this.delayTwentyNine(), 6000)
    }
    if(this.state.pageNumber === 1 ){
      setTimeout(() => this.delayOnOne(), 10000)
    }
    if(this.state.pageNumber === 1.5 ){
      setTimeout(() => this.delayOnOnePointFive(), 3000)
    }
    if(this.state.pageNumber === 3 ){
      setTimeout(() => this.delayThree(), 16000)
    }


    if(this.state.pageNumber === 1){
        return(
          <View style={styles.container}>
              <HeavyBucket/>
          </View>
          )
    }else if(this.state.pageNumber < 1 || this.state.pageNumber > 32){
        return(
          <View style={styles.container}>
              <MinusOne/>
          </View>
          )
    }else if(this.state.pageNumber === 1.5){
        return(
          <View style={styles.container}>
              <Title/>
          </View>
          )
    }else if(this.state.pageNumber === 2){
        return(
          <View style={styles.container}>
              <SplashScreen/>
                <ThemeProvider>
                  <Button
                    title="Start"
                    onPress={this.twoClicksForwards}
                    />
                </ThemeProvider>
          </View>
          )
      }else if(this.state.pageNumber === 3){
          return(
            <View style={styles.container}>
                <OpeningSequence/>
            </View>
            )
      }else if(this.state.pageNumber === 4){
        return(
          <View style={styles.container}>
              <Page1
               pageNumberPass={this.pageNumberPass}
                />
              <View style={styles.bothButtons}>
                <View style={styles.backContainer}>
               <ThemeProvider theme={theme}>
                 <Button
                   title="Back"
                   onPress={this.twoClickBackwards}
                   />
               </ThemeProvider>
                 </View>
                 <Text style={styles.gap}></Text>
                 <View style={styles.buttonContainer}>
                <ThemeProvider theme={theme}>
                  <Button
                    title="Next Page"
                    onPress={this.twoClicksForwards}
                    />
                </ThemeProvider>
                  </View>
                </View>
          </View>
          )
      }else if(this.state.pageNumber === 5){
        return(
          <View style={styles.container}>
              <Page2
                pageNumberPass={this.pageNumberPass}
                />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 6){
        return(
          <View style={styles.container}>
              <Page3
               pageNumberPass={this.pageNumberPass}
                />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>

          )
      }else if(this.state.pageNumber === 7){
        return(
          <View style={styles.container}>
            <Page4
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 8){
        return(
          <View style={styles.container}>
            <Page5
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 9){
        return(
          <View style={styles.container}>
            <Page6
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 10){
        return(
          <View style={styles.container}>
            <Page7
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 11){
        return(
          <View style={styles.container}>
            <Page8
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 12){
        return(
          <View style={styles.container}>
            <Page9
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 13){
        return(
          <View style={styles.container}>
            <Page10
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 14){
        return(
          <View style={styles.container}>
            <Page11
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 15){
        return(
          <View style={styles.container}>
            <Page12
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 16){
        return(
          <View style={styles.container}>
            <Page13
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 17){
        return(
          <View style={styles.container}>
            <Page14
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 18){
        return(
          <View style={styles.container}>
            <Page15
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 19){
        return(
          <View style={styles.container}>
            <Page16
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 20){
        return(
          <View style={styles.container}>
            <Page17
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 21){
        return(
          <View style={styles.container}>
            <Page18
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 22){
        return(
          <View style={styles.container}>
            <Page19
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 23){
        return(
          <View style={styles.container}>
            <Page20
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 24){
        return(
          <View style={styles.container}>
            <Page21
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 25){
        return(
          <View style={styles.container}>
            <Page22
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 26){
        return(
          <View style={styles.container}>
            <Page23
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 27){
        return(
          <View style={styles.container}>
            <Page24
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 28){
        return(
          <View style={styles.container}>
            <Page25
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 29){
        return(
          <View style={styles.container}>
            <Page26
             pageNumberPass={this.pageNumberPass}
              />
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this.twoClickBackwards}
                     />
                 </ThemeProvider>
                   </View>
                   <Text style={styles.gap}></Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this.twoClicksForwards}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 30){
        return(
          <View style={styles.container}>
            <Page27
             pageNumberPass={this.pageNumberPass}
              />
          </View>
          )
        }else if(this.state.pageNumber === 31){
        return(
          <View style={styles.container}>
            <MinusOne/>
             <View style={styles.text}>
             <Text style={styles.textView}
              >
             </Text>
            </View>
          </View>
          )
        }else if(this.state.pageNumber === 32){
          return(
            <View style={styles.container}>
              <MinusOne/>
               <View style={styles.text}>
               <Text style={styles.textView}
                >
               </Text>
              </View>
            </View>
            )
        }
    }
}

const theme = {
  Avatar: {
    rounded: true,
  },
  Badge: {
    textStyle: { fontSize: 30 },
  },
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    opacity: 1,
    width,
    height,
    resizeMode: 'contain',
    color: "white",
  },
  startButton: {
    opacity: 0.1,
    width: 20,
  },
  buttonContainer: {
    width: buttonWidth,
    height: buttonHeight,
    marginBottom: 1,

  },
  backContainer: {
    width: buttonWidth,
    height: buttonHeight,

  },
  bothButtons: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gap:{
    width: gap,
  },
  textView:{
    color: 'white',
  },
});

AppRegistry.registerComponent('TinCircus', () => TinCircus);
