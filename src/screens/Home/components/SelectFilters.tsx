import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SelectViewStyles} from '../styles';
import {DefaultOpacity, colors} from '../../../styles/theme';

interface SelectFiltersProps {
  selectedFilter: string;
  selectFilter: (label: string) => void;
}

const buttonsProps = [
  {
    label: 'Today',
  },
  {
    label: 'Weekly',
  },
  {
    label: 'Overall',
  },
];

export const SelectFilters = ({
  selectedFilter,
  selectFilter,
}: SelectFiltersProps) => {
  return (
    <View style={SelectViewStyles.container}>
      {buttonsProps.map(({label}, index) => (
        <TouchableOpacity
          activeOpacity={DefaultOpacity}
          key={index}
          onPress={() => {
            selectFilter(label);
          }}
          style={{
            ...SelectViewStyles.button,
            backgroundColor:
              selectedFilter === label ? colors.primary : colors.white,
          }}>
          <Text
            style={{
              ...SelectViewStyles.label,
              color:
                selectedFilter === label
                  ? colors.background
                  : colors.textPrimary,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
