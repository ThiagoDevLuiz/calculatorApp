import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default props => {
  const stylesButton = [
    styles.button,
    props.double && styles.buttonDouble,
    props.triple && styles.buttonTriple,
    props.operation && styles.operationButton,
    props.gray && styles.buttonGray,
  ];

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: (Dimensions.get('window').width / 4) * 0.92,
    width: (Dimensions.get('window').width / 4) * 0.92,
    padding: 20,
    backgroundColor: 'rgba(51, 51, 51, 0.692)',
    textAlign: 'center',
    borderRadius: 50,
    color: '#FFF',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fd9c0a',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  buttonGray: {
    backgroundColor: 'gray',
  },  
});