import {LoadingProvider} from '@contexts/loading.context';
import {ThemeProvider, useThemeContext} from '@contexts/theme.context';
import useLanguage from '@hooks/useLanguage';
import AppNavigator from '@src/navigations/AppNavigator';
import {store} from '@store/index';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

function App() {
  const {theme} = useThemeContext();
  const isLoaded = useLanguage();

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <ThemeProvider>
          <LoadingProvider>
            <StatusBar animated={true} backgroundColor={theme?.background} />
            {isLoaded && <AppNavigator />}
          </LoadingProvider>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
