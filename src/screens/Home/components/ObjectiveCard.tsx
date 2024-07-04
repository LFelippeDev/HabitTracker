import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {colors} from '../../../styles/theme';
import {Status, ToDo} from '../mockData';
import {ObjectiveCardStyles} from '../styles';

interface ObjectiveCardProps extends ToDo {
  handleObjective: (id: string, status: Status) => void;
}

export const ObjectiveCard = ({
  id,
  color,
  emoji,
  title,
  status,
  handleObjective,
}: ObjectiveCardProps) => {
  const [margin, setMargin] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });

  const onGestureEvent = useCallback(
    ({nativeEvent}: GestureEvent<PanGestureHandlerEventPayload>) => {
      if (status === Status.COMPLETED || status === Status.SKKIPED) return;
      const newMargin =
        nativeEvent.translationX > -140 && nativeEvent.translationX < 140
          ? nativeEvent.translationX
          : 0;

      setMargin({
        rightMargin: newMargin < 0 ? Math.abs(newMargin) : 0,
        leftMargin: newMargin > 0 ? Math.abs(newMargin) : 0,
      });
    },
    [setMargin],
  );

  const onHandlerStateChange = useCallback(() => {
    if (margin.leftMargin > 40) handleObjective(id, Status.COMPLETED);
    else if (margin.rightMargin > 40) handleObjective(id, Status.SKKIPED);

    setMargin({
      leftMargin: 0,
      rightMargin: 0,
    });
  }, [id, handleObjective, margin]);

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}>
      <View>
        <View style={ObjectiveCardStyles.completeContainer}>
          <Text style={ObjectiveCardStyles.completeContainerText}>✓</Text>
        </View>
        <View style={ObjectiveCardStyles.skippedContainer}>
          <Text style={ObjectiveCardStyles.skippedContainerText}>Skip →</Text>
        </View>
        <View
          style={{
            ...ObjectiveCardStyles.container,
            backgroundColor: color,
            marginRight: margin.rightMargin,
            marginLeft: margin.leftMargin,
          }}>
          <View style={ObjectiveCardStyles.content}>
            <Text style={ObjectiveCardStyles.emoji}>{emoji}</Text>
            <Text style={ObjectiveCardStyles.text}>{title}</Text>
          </View>
          {status === Status.COMPLETED && (
            <View
              style={{
                ...ObjectiveCardStyles.checkedContainer,
                backgroundColor: colors.success,
              }}>
              <Text style={ObjectiveCardStyles.checkedContainerText}>✓</Text>
            </View>
          )}
          {status === Status.SKKIPED && (
            <View
              style={{
                ...ObjectiveCardStyles.checkedContainer,
                backgroundColor: colors.textSecondary,
              }}>
              <Text style={ObjectiveCardStyles.checkedContainerText}>→</Text>
            </View>
          )}
        </View>
      </View>
    </PanGestureHandler>
  );
};
