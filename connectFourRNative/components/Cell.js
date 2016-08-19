import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ReactNative,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux'

import Icon from '../node_modules/react-native-vector-icons/FontAwesome';

var maxWidth = Dimensions.get('window').width; //full width

class Cell extends Component{
  //Rendering according to state fetched from redux-store.
  render() {
    if(this.props.boardState[this.props.x][this.props.y] === 1){
      iconName = "remove"
      iconSize = maxWidth/7-2
    } else if (this.props.boardState[this.props.x][this.props.y] === 2) {
      iconName = "circle-o"
      iconSize = maxWidth/7-2
    } else {
      iconName = "circle-o"
      iconSize = 0
    }
    return (
      <View style={{height: 50, width: 50, backgroundColor: 'green', justifyContent: 'center'}}>
        <Icon name={iconName} size={iconSize} color='black' />
      </View>
    );
  }
};

const mapStateToProps = (state) =>{
  return {
    boardState: state.boardState,
    currentPlayer: state.currentPlayer
  }
}

module.exports = connect(mapStateToProps)(Cell);
