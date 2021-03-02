/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import CodePush from 'react-native-code-push';
import shinchan from './assets/shinchan.png';


const CODE_PUSH_OPTIONS = {
  checkFrequency : CodePush.CheckFrequency.ON_APP_START,

};

class App extends Component {
  constructor(){
    super();
    console.log("ksjbecuis");
  }

  componentDidMount(){
    CodePush.sync({installMode : CodePush.InstallMode.IMMEDIATE},this.syncWithCodePush, null);
  }

  syncWithCodePush = (status) =>{
    console.log(status);
  }



  render() {
    return (
      <View style={style.container }>
        <Text>Hello </Text>
        <Image 
          style={style.tinyLogo}
          source={shinchan}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#94ebcd"
  },
  tinyLogo : {
    height : 300,
    width : 300
  }
})

export default CodePush(CODE_PUSH_OPTIONS)( App);