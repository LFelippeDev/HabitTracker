import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {WeeklyStyles} from '../styles';
import {Days, ToDo} from '../mockData';
import {colors} from '../../../styles/theme';
import {Card} from './Card';

const WeekDays = [
  Days.MONDAY,
  Days.TUESDAY,
  Days.WEDNESDAY,
  Days.THURSDAY,
  Days.FRIDAY,
  Days.SATURDAY,
  Days.SUNDAY,
];

export const WeeklyCard = ({color, emoji, title, days}: ToDo) => {
  const subtitle = useMemo(() => {
    const countDays = days.length;

    return countDays === 7 ? 'Everyday' : `${countDays} days per week`;
  }, [days]);

  return (
    <Card emoji={emoji} title={title} subtitle={subtitle}>
      <View style={WeeklyStyles.daysContainer}>
        {WeekDays.map((day, index) => {
          const isChecked = days.includes(day);
          const isSunday = day === Days.SUNDAY;
          return (
            <View key={index} style={WeeklyStyles.dayContainer}>
              <Text
                style={{
                  ...WeeklyStyles.dayTitle,
                  color: isSunday ? colors.primary : colors.textSecondary,
                }}>
                {day}
              </Text>
              <View
                style={{
                  ...WeeklyStyles.checkedContainer,
                  backgroundColor: isChecked ? color : colors.white,
                  borderColor: isChecked ? color : colors.border,
                }}>
                {isChecked && (
                  <Text style={WeeklyStyles.checkedContainerText}>✓</Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </Card>
  );
};
