import React, {useCallback, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {SelectPeriodStyles} from '../styles';
import {DefaultOpacity, colors} from '../../../styles/theme';

interface SelectPeriodProps {
  selectedFilter: string;
  setSelectedFilter: (label: string) => void;
}

const buttonsProps = [
  {
    label: 'All',
  },
  {
    label: 'Morning',
  },
  {
    label: 'Afternoon',
  },
  {
    label: 'Evening',
  },
];

export const SelectPeriod = ({
  selectedFilter,
  setSelectedFilter,
}: SelectPeriodProps) => {
  const selectFilter = useCallback(
    (label: string) => {
      setSelectedFilter(label);
    },
    [setSelectedFilter],
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={SelectPeriodStyles.container}>
      {buttonsProps.map(({label}, index) => (
        <TouchableOpacity
          activeOpacity={DefaultOpacity}
          key={index}
          onPress={() => {
            selectFilter(label);
          }}
          style={{
            ...SelectPeriodStyles.button,
            backgroundColor:
              selectedFilter === label ? colors.primary : colors.background,
            borderColor:
              selectedFilter === label ? colors.primary : colors.border,
          }}>
          <Text
            style={{
              ...SelectPeriodStyles.label,
              color:
                selectedFilter === label
                  ? colors.background
                  : colors.textPrimary,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
