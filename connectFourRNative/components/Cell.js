import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ReactNative,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux'

import Icon from '../node_modules/react-native-vector-icons/FontAwesome';
const styles = require('../styles.js')

var maxWidth = Dimensions.get('window').width; //full width

class Cell extends Component{
  //Rendering according to state fetched from redux-store
  render() {
    if(this.props.boardState[this.props.x][this.props.y] === 1){
      return (
            <View style={{height: 50, width: 50, backgroundColor: 'green'}}>
              <Icon name="remove" size={(maxWidth/7-2)} color="black" />
            </View>
          );
      } else if(this.props.boardState[this.props.x][this.props.y] === 2){
        return (
              <View style={{height: 50, width: 50, backgroundColor: 'green'}}>
                <Icon name="circle-o" size={(maxWidth/7-2)} color="black" />
              </View>
            );
      } else {
        return (
              <View style={{height: 50, width: 50, backgroundColor: 'green'}}>
              </View>
            );
      }
  }
};

const mapStateToProps = (state) =>{
  return {
    boardState: state.boardState,
    currentPlayer: state.currentPlayer
  }
}

module.exports = connect(mapStateToProps)(Cell);
