import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Display(props) {
  const { valor, resultado } = props;

  return (
    <View style={ styles.container }>
      <Text
        numberOfLines={1}
        style={ styles.txtDisplay }
      >
        { valor }
      </Text>

      <Text
        numberOfLines={1}
        style={ styles.txtDisplay }
      >
        { resultado }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    backgroundColor: "#424C56",
    height: 120,
    paddingHorizontal: 16,
    width: "100%",
  },

  txtDisplay: {
    fontSize: 40,
  },
});