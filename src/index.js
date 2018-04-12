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
  View
} from 'react-native';

import Card from './card';


export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Card/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#f5fcff",
    justifyContent:'center'
  }
})

