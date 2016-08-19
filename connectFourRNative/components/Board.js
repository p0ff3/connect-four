import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Column from'./Column.js';

class Board extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
