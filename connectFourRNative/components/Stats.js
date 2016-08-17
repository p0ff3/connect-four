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
import { resetBoard } from '../actions.js'
import Icon from '../node_modules/react-native-vector-icons/FontAwesome';
const styles = require('../styles.js')

var maxWidth = Dimensions.get('window').width; //full width

class Stats extends Component{
  _reset(){
    this.props.resetBoard()
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
          <Text style= {{fontSize: 20}}>Nuvarande spelare: </Text>
          <Icon name = {iconName} size={(maxWidth/7-2)} color="black" />
        </View>
        <View style = {{flexDirection: 'row', flex: 1}}>
            <View style= {{flex: 1, flexDirection: 'column'}}>
              <Text style= {{fontSize: 20}}>Scoreboard </Text>

              <View style ={{flexDirection:'row', alignItems: 'center'}}>
                <Icon name = "remove" size={(maxWidth/7-2)} color="black" />
                <Text style = {{fontSize: 20}}>{this.props.playerOneWins}</Text>
              </View>

              <View style ={{flexDirection:'row', alignItems: 'center'}}>
                <Icon name = "circle-o" size={(maxWidth/7-2)} color="black" />
                <Text style = {{fontSize: 20}}>{this.props.playerTwoWins}</Text>
              </View>

            </View>
          <View style= {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1}}>
            <TouchableHighlight style = {styles.resetButton} onPress={this._reset.bind(this)}>
              <Text>Nollställ</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
};

mapDispatch = {
  resetBoard: resetBoard
}

const mapStateToProps = (state) =>{
  return {
    currentPlayer: state.currentPlayer,
    playerOneWins: state.playerOneWins,
    playerTwoWins: state.playerTwoWins
  }
}

module.exports = connect(mapStateToProps, mapDispatch)(Stats);
