import React, { Component } from 'react';
import {
  View,

} from 'react-native';

import styles from '../styles';
import Cell from './Cell.js';
import Column from'./Column.js';

class Board extends Component {
  render() {
    //Pass down X-cord, it's needed to look for solutions.
    return (
      <View style={{flexDirection: 'row'}}>
        <Column x ={0}/>
        <Column x ={1}/>
        <Column x ={2}/>
        <Column x ={3}/>
        <Column x ={4}/>
        <Column x ={5}/>
        <Column x ={6}/>

      </View>

    );
  }
};

module.exports = Board;
