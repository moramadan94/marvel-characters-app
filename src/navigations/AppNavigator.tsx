import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppContainer from './AppContainerStack';
import {setNavigationRef} from './NavigationService';

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={ref => {
        setNavigationRef(ref as any);
      }}>
      <AppContainer />
    </NavigationContainer>
  );
};

export default AppNavigator;
