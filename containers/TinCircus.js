import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import HeavyBucket from '../components/HeavyBucket'
import SplashScreen from '../components/SplashScreen'
import OpeningSequence from '../components/OpeningSequence'
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
  StyleSheet,
} from 'react-native';

import soundfile1 from '../audio/pageTurnFast.wav'
import soundfile2 from '../audio/pageTurnSlow.wav'
import soundfile3 from '../audio/rainFx.mp3'


// let pageTurnFast = new Audio(soundfile1);


export default class TinCircus extends Component {



constructor(props) {
  super(props);
  this.state = {
    pageNumber: 1,
  };
  this._onButtonClick = this._onButtonClick.bind(this)
  this._onBackClick = this._onBackClick.bind(this)
}




_onButtonClick(){
  let prevPage = this.state.pageNumber
  this.setState(() => {
    return {pageNumber: prevPage + 1}
  })
}

_onBackClick(){
  let prevPage = this.state.pageNumber
  this.setState(() => {
    return {pageNumber: prevPage - 1}
  })
}

  render() {

    if(this.state.pageNumber === 29){
      setTimeout(() => {this.setState({pageNumber: 1.5})}, 6000)
    }
    if(this.state.pageNumber === 1 ){
      setTimeout(() => {this.setState({pageNumber: 1.5})}, 10000)
    }
    if(this.state.pageNumber === 1.5 ){
      setTimeout(() => {this.setState({pageNumber: 2})}, 3000)
    }
    if(this.state.pageNumber === 3 ){
      setTimeout(() => {this.setState({pageNumber: 4})}, 16000)
    }


    if(this.state.pageNumber === 1){
        return(
          <View style={styles.container}>
              <HeavyBucket/>
          </View>
          )
    }else if(this.state.pageNumber === 1.5){
        return(
          <View style={styles.container}>
              <Title/>
          </View>
          )
    }else if(this.state.pageNumber === 3){
        return(
          <View style={styles.container}>
              <OpeningSequence/>
          </View>
          )
    }else if(this.state.pageNumber === 2){
        return(
          <View style={styles.container}>
              <SplashScreen/>
                <ThemeProvider>
                  <Button
                    title="Start"
                    onPress={this._onButtonClick}
                    />
                </ThemeProvider>
          </View>
          )
      }else if(this.state.pageNumber === 4){
        return(
          <View style={styles.container}>
              <Page1/>
              <View style={styles.bothButtons}>
                <View style={styles.backContainer}>
               <ThemeProvider theme={theme}>
                 <Button
                   title="Back"
                   onPress={this._onBackClick}
                   />
               </ThemeProvider>
                 </View>
                 <Text>                                                        </Text>
                 <View style={styles.buttonContainer}>
                <ThemeProvider theme={theme}>
                  <Button
                    title="Next Page"
                    onPress={this._onButtonClick}
                    />
                </ThemeProvider>
                  </View>
                </View>
          </View>
          )
      }else if(this.state.pageNumber === 5){
        return(
          <View style={styles.container}>
              <Page2/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 6){
        return(
          <View style={styles.container}>
              <Page3/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>

          )
      }else if(this.state.pageNumber === 7){
        return(
          <View style={styles.container}>
              <Page4/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 8){
        return(
          <View style={styles.container}>
              <Page5/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
      }else if(this.state.pageNumber === 9){
        return(
          <View style={styles.container}>
              <Page6/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 10){
        return(
          <View style={styles.container}>
              <Page7/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 11){
        return(
          <View style={styles.container}>
              <Page8/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 12){
        return(
          <View style={styles.container}>
              <Page9/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 13){
        return(
          <View style={styles.container}>
              <Page10/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 14){
        return(
          <View style={styles.container}>
              <Page11/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 15){
        return(
          <View style={styles.container}>
              <Page12/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 16){
        return(
          <View style={styles.container}>
              <Page13/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 17){
        return(
          <View style={styles.container}>
              <Page14/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 18){
        return(
          <View style={styles.container}>
              <Page15/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 19){
        return(
          <View style={styles.container}>
              <Page16/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 20){
        return(
          <View style={styles.container}>
              <Page17/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 21){
        return(
          <View style={styles.container}>
              <Page18/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 22){
        return(
          <View style={styles.container}>
              <Page19/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 23){
        return(
          <View style={styles.container}>
              <Page20/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 24){
        return(
          <View style={styles.container}>
              <Page21/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 25){
        return(
          <View style={styles.container}>
              <Page22/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 26){
        return(
          <View style={styles.container}>
              <Page23/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 27){
        return(
          <View style={styles.container}>
              <Page24/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 28){
        return(
          <View style={styles.container}>
              <Page25/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 29){
        return(
          <View style={styles.container}>
              <Page26/>
                <View style={styles.bothButtons}>
                  <View style={styles.backContainer}>
                 <ThemeProvider theme={theme}>
                   <Button
                     title="Back"
                     onPress={this._onBackClick}
                     />
                 </ThemeProvider>
                   </View>
                   <Text>                                                        </Text>
                   <View style={styles.buttonContainer}>
                  <ThemeProvider theme={theme}>
                    <Button
                      title="Next Page"
                      onPress={this._onButtonClick}
                      />
                  </ThemeProvider>
                    </View>
                  </View>
          </View>
          )
        }else if(this.state.pageNumber === 30){
        return(
          <View style={styles.container}>
              <Page27/>
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
  },
  startButton: {
    opacity: 0.1,
    width: 20,
  },
  buttonContainer: {

  },
  backContainer: {

  },
  bothButtons: {
    backgroundColor: "black",
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
