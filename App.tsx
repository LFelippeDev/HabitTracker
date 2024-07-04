import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import {Home} from './src/screens/Home';
import {colors} from './src/styles/theme';

function App(): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <NativeViewGestureHandler>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor: colors.background}}>
            <Home scrollViewRef={scrollViewRef} />
          </ScrollView>
        </NativeViewGestureHandler>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
