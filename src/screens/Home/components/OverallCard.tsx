import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {ToDo} from '../mockData';
import {OverallStyles} from '../styles';
import {Card} from './Card';
import {colors} from '../../../styles/theme';

export const OverallCard = ({
  color,
  emoji,
  title,
  days,
  monthlyActivity,
}: ToDo) => {
  const subtitle = useMemo(() => {
    const countDays = days.length;

    return countDays === 7 ? 'Everyday' : `${countDays} days per week`;
  }, [days]);

  return (
    <Card emoji={emoji} title={title} subtitle={subtitle}>
      {monthlyActivity.map(({acitvity, day}, index) => {
        const [weekDay] = day.toUpperCase();
        return (
          <View style={OverallStyles.weekContainer} key={index}>
            <Text style={OverallStyles.weekContainerText}>{weekDay}</Text>
            {acitvity.map((checked, index) => (
              <View
                key={index}
                style={{
                  ...OverallStyles.checkedContainer,
                  backgroundColor: checked ? color : colors.background,
                }}
              />
            ))}
          </View>
        );
      })}
    </Card>
  );
};
