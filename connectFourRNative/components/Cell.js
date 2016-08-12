import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ReactNative,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Icon from '../node_modules/react-native-vector-icons/FontAwesome';
const styles = require('../styles.js')

var maxWidth = Dimensions.get('window').width; //full width

class Cell extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.cellState == 0){
      return (
        <View style={styles.cell}>
        </View>
      );
    } else if (this.props.cellState == 1){
      return (
        //Ugly fix on sizes of icons. Will get this into state later on.
        <View style={styles.cell}>
          <Icon name="remove" size={(maxWidth/7-2)} color="black" />
        </View>
      );
    } else {
      alert(this.props.cellState)
      return (
        <View style={styles.cell}>
          <Icon name="circle-o" size={(maxWidth/7-4)} color="black" />
        </View>
      );
    }
  }
};
module.exports = Cell;
