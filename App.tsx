import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useColorScheme} from 'nativewind';
import {Provider} from 'react-redux';

import Navigation from '@/navigation';
import store from '@/redux/store';

function App(): JSX.Element {
  const {colorScheme} = useColorScheme();
  useEffect(() => {
    StatusBar.setBarStyle(
      colorScheme === 'light' ? 'dark-content' : 'light-content',
    );
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(
        colorScheme === 'dark' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)',
      );
      StatusBar.setTranslucent(true);
    }
  }, [colorScheme]);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
