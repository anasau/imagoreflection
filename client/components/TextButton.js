import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'
export function TextButton({title, style, onPress}) {

  return (
    <TouchableOpacity style={[styles.container,  style]} onPress={onPress}>
      <Text style={[styles.text, {color: Colors.primary,}]}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
});
