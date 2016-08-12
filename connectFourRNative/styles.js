const React = require('react-native')
const {StyleSheet,
Dimensions
} = React

var maxWidth = Dimensions.get('window').width; //full width
var maxHeight = Dimensions.get('window').height; //full height
var cellSide = maxWidth/7;

var styles = StyleSheet.create({
  cell: {
    backgroundColor: 'grey',
    height: maxWidth/8,
    width: maxWidth/8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

module.exports = styles
