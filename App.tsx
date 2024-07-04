import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import {Home} from './src/screens/Home';
import {colors} from './src/styles/theme';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <NativeViewGestureHandler>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor: colors.background}}>
            <Home />
          </ScrollView>
        </NativeViewGestureHandler>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
