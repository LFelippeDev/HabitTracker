import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import {CardStyles} from '../styles';

interface CardProps {
  children: ReactNode;
  emoji: string;
  title: string;
  subtitle: string;
}

export const Card = ({emoji, subtitle, title, children}: CardProps) => {
  return (
    <View style={CardStyles.container}>
      <View style={CardStyles.header}>
        <View style={CardStyles.headerInfo}>
          <Text style={CardStyles.emoji}>{emoji}</Text>
          <Text style={CardStyles.headerTitle}>{title}</Text>
        </View>
        <Text style={CardStyles.headerSubtitle}>{subtitle}</Text>
      </View>
      <View style={CardStyles.divider} />
      {children}
    </View>
  );
};
