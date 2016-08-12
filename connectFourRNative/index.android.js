/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('./styles.js')

const Cell = require('./components/Cell.js');

class connectFourRNative extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Cell cellState={0}/>
        <Cell cellState={1}/>
        <Cell cellState={2}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('connectFourRNative', () => connectFourRNative);
