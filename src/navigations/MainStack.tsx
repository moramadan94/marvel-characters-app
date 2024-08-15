import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainRoutes} from '@utils/enums';
import Home from '@screens/home';
import {MainStackParamList} from '@utils/types';
import {View} from 'react-native';
import {scale} from '@styles';
import CharacterDetail from '@screens/characterDetails';
import IconButton from '@components/atoms/IconButton';
import {SettingsIcon} from '@assets/svg';
import {translate} from '@utils/helpers';
import NavigationService from './NavigationService';
import Settings from '@screens/settings';

const MainNavigator = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <MainNavigator.Navigator
      initialRouteName={MainRoutes.Home}
      screenOptions={({}) => ({
        headerShown: true,
        headerRight: () => (
          <View style={{paddingHorizontal: scale(10)}}>
            <IconButton
              onPress={async () => {
                NavigationService.navigate(MainRoutes.Settings);
              }}
              icon={SettingsIcon}
              iconSize={25}
            />
          </View>
        ),
      })}>
      <MainNavigator.Screen
        name={MainRoutes.Home}
        component={Home}
        options={{title: translate('home.title')}}
      />
      <MainNavigator.Screen
        name={MainRoutes.CharacterDetail}
        component={CharacterDetail}
        options={{title: translate('details.title')}}
      />

      <MainNavigator.Screen
        options={{headerShown: false}}
        name={MainRoutes.Settings}
        component={Settings}
      />
    </MainNavigator.Navigator>
  );
};

export default MainStack;
