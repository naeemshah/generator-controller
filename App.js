/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
  Switch
} from 'react-native';

import {
  COLOR,
  ThemeProvider,
  Toolbar,
  BottomNavigation,
  Button,
  Divider,
  ListItem,
  Subheader,
} from 'react-native-material-ui';
import wifi from 'react-native-android-wifi';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      color2: 'green',
      text:"Press To Start",
      ss:"",
      auth:false
    };
  }

  componentDidCatch(){

  }

  componentDidMount() {
    this._value = 0;

    wifi.isEnabled((isEnabled) => {
      if (isEnabled) {
        this.setState({ss:"conected"})
      } else {
        this.setState({ss:"not conected"})
      }
    });



  }

  stopGen(){
    if(!this.state.auth)
    return;

    fetch("http://192.168.4.1/GetEle") // Call the fetch function passing the url of the API as a parameter
    .then(function() {
       
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
    this.setState({auth:false})
    
  }

  handlePressIn() {
    
      if(!this.state.auth)
         return;

    fetch("http://192.168.4.1/s") // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});


    this.setState({"color2":"red",text:"Starting...."})




  }
  handlePressOut() {

    if(!this.state.auth)
         return;

    fetch("http://192.168.4.1/s") // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});

    this.setState({"color2":"green",text:"Press To Start",auth:false,s1:0})
  }


  toggleSwitch1(value) {
    this.setState({auth: value})
   
 }

 
  

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
       <Toolbar
        
        centerElement="Awesome App"
       
      />
             <View style={{flex:1,direction:"rows",alignItems:"center",marginTop:100}}>
           
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn.bind(this)}
            onPressOut={this.handlePressOut.bind(this)}
          >
            <View
            
              style={{
                
                borderWidth: 5,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                textAlign:"center",
                justifyContent: 'center',
                width: 200,
                height: 200,
                backgroundColor:this.state.color2,
                borderRadius: 100,
               
              }}
            >
              <Text style={styles.text}>{this.state.text}</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={{height:100}}>{this.state.ss}</Text>
          <Button disabled={!this.state.auth} onPress={()=>this.stopGen()}  style={{width:100, marginTop:50}} accent raised text="Stop" />
           

            <Switch style={{marginTop:50}}  onValueChange = {(value)=>this.toggleSwitch1(value)}
            value = {this.state.auth} />
          
          </View>

      

          

        </ThemeProvider>
        

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111',
    textAlign:"center",
    color:"white",
    fontWeight:"bold"
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
