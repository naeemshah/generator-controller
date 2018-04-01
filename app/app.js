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

export class App2 extends Component<Props> {
  constructor() {
    super();
    this.state = {
      textComplete: 'Not Hold'
    };
  }

  componentDidCatch(){

  }

  componentWillMount() {
    this._value = 0;
  }

  handlePressIn() {}
  handlePressOut() {
    alert('press out');
  }
  

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Toolbar centerElement="Awesome APP" />
        <View style={{ marginTop: 50 }}>
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
          >
            <View
              style={{
                borderWidth: 5,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
              
                justifyContent: 'center',
                width: 100,
                height: 100,
                backgroundColor: 'green',
                borderRadius: 50,
              }}
            >
              <Text style={styles.text}>Press And Hold Me</Text>
            </View>
          </TouchableWithoutFeedback>
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
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
