import {LoadingProvider} from '@contexts/loading.context';
import {ThemeProvider} from '@contexts/theme.context';
import useLanguage from '@hooks/useLanguage';
import AppNavigator from '@src/navigations/AppNavigator';
import {store} from '@store/index';
import React from 'react';
import {Provider} from 'react-redux';

function App() {
  const isLoaded = useLanguage();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LoadingProvider>{isLoaded && <AppNavigator />}</LoadingProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
