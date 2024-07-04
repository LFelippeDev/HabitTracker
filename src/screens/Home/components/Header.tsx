import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {HeaderStyles} from '../styles';
import {Text} from 'react-native';
import {DefaultOpacity} from '../../../styles/theme';

export const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <Image />
      <Text style={HeaderStyles.title}>Home</Text>
      <TouchableOpacity activeOpacity={DefaultOpacity} />
    </View>
  );
};
