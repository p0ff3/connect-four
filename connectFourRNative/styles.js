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
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 100,
    height:40
  }
})

module.exports = styles
