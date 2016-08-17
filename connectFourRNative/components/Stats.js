import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ReactNative,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux'

import Icon from '../node_modules/react-native-vector-icons/FontAwesome';
const styles = require('../styles.js')

var maxWidth = Dimensions.get('window').width; //full width

class Stats extends Component{
  _reset(){
    alert('reset')
  }
  render() {
    if(this.props.currentPlayer === 1 ) {
      iconName = "remove"
    } else {
      iconName = 'circle-o'
    }
    return(
      <View style = {{flexDirection: 'column'}}>
        <View style = {styles.turnShower}>
          <Text style= {{fontSize: 25}}>Nuvarande spelare: </Text>
          <Icon name = {iconName} size={(maxWidth/7-2)} color="black" />
        </View>
        <View style = {{flexDirection: 'row'}}>
          <View style= {{flex: 1}}>
            <Text>Scoreboard</Text>
          </View>
          <View style= {{flex: 1}}>
            <TouchableHighlight onPress={this._reset.bind(this)}>
            <Text>Nollställ</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
};

const mapStateToProps = (state) =>{
  return {
    currentPlayer: state.currentPlayer
  }
}

module.exports = connect(mapStateToProps)(Stats);
