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
  ListView,
  View,
  Dimensions
} from 'react-native';

const styles = require('./styles.js')

const Cell = require('./components/Cell.js');
const Board = require('./components/Board.js');
const Stats = require('./components/Stats.js')

var maxHeight = Dimensions.get('window').height; //full width

class Game extends Component {
  render() {
      return (
        <View style = {{backgroundColor: 'green', flex: 1, maxHeight: maxHeight}}>
          <Board/>
          <Stats/>
        </View>

      );
    }
}

module.exports = Game;
