import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Dimensions } from 'react-native';

export default function Display(props) {
  const { igual, operacao, ac, bs, total, onClick, label, duplo  } = props;
  
  const stylesBtn = [styles.btn];

  if (total) {
    stylesBtn.push(styles.btnTotal);
  };

  if (duplo) {
    stylesBtn.push(styles.btnDuplo);
  };

  if (igual) {
    stylesBtn.push(styles.btnIgual);
  };

  if (operacao) {
    stylesBtn.push(styles.btnOper);
  };

  if (ac) {
    stylesBtn.push(styles.btnAC);
  };

  if (bs) {
    stylesBtn.push(styles.btnBS);
  };

  return (
    <TouchableHighlight
      onPress={ onClick }
    >
      <Text style={ stylesBtn }>{ label }</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: "#000",
    textAlign: "center",
  },

  btnIgual: {
    color: "#fff",
    backgroundColor: "#178AF7",
    fontSize: 48,
  },

  btnOper: {
    color: "#0f0",
  },

  btnAC: {
    color: "#f00",
    fontSize: 30,
  },

  btnBS: {
    color: "#F7F317",
    fontSize: 32,
  },

  btnDuplo: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  btnTotal: {
    width: (Dimensions.get('window').width / 4) * 4,
  }
});