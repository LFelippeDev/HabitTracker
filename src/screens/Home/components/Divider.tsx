import React from 'react';
import {Text, View} from 'react-native';
import {DividerStyles} from '../styles';

interface DividerProps {
  text: string;
}

export const Divider = ({text}: DividerProps) => {
  return (
    <View style={DividerStyles.container}>
      <Text style={DividerStyles.text}>{text}</Text>
      <View style={DividerStyles.divider} />
    </View>
  );
};
