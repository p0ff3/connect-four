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
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const styles = require('./styles.js')

const Game = require('./Game.js');
const GameState = require('./reducers/GameState.js')

const boardValues = new Array(7)
for (var i = 0; i < 7; i++) {
  boardValues[i] = new Array(7);
  for(var j = 0; j < 7; j++){
    boardValues[i][j] = 0
  }
}

const store = createStore(GameState, {boardState: boardValues,
                                      currentPlayer: 1,
                                      hasAWinner: false})

class connectFourRNative extends Component {

  render () {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('connectFourRNative', () => connectFourRNative);
