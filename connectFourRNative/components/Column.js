import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux'

import { columnPressed } from '../actions.js'

import styles from '../styles';
import Cell from './Cell.js';

class Column extends Component {
  //When pressed, we should pass along the cords to the action so the redux-reducer can modify state accordingly.
  _columnPress(){
    this.props.columnPressed(this.props.x)
  }

  render() {
    //X-cords passes down. Cells render accordingly to redux-state
    return (
      <TouchableHighlight onPress={this._columnPress.bind(this)}>
        <View style={{flexDirection: 'column'}}>
          <Cell x = {this.props.x} y = {0}/>
          <Cell x = {this.props.x} y = {1}/>
          <Cell x = {this.props.x} y = {2}/>
          <Cell x = {this.props.x} y = {3}/>
          <Cell x = {this.props.x} y = {4}/>
          <Cell x = {this.props.x} y = {5}/>
          <Cell x = {this.props.x} y = {6}/>
        </View>
      </TouchableHighlight>
    );
  }
};

mapDispatch = {
  columnPressed: columnPressed
}
const mapStateToProps = (state) =>{
  return {
    currentPlayer: state.currentPlayer
  }
}

module.exports = connect(mapStateToProps, mapDispatch)(Column);
