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
  View
} from 'react-native';

const styles = require('./styles.js')

const Cell = require('./components/Cell.js');
const Board = require('./components/Board.js');

class Game extends Component {
  render() {
      return (
        <Board/>
      );
    }
}

module.exports = Game;
