import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {StackNames} from '@utils/enums';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@store/index';
import {checkUserAuthentication} from '@store/slices/authThunks';
import Loader from '@components/molecules/Loader';
import {View} from 'react-native-animatable';
import {useThemeContext} from '@contexts/theme.context';

const AppStackNavigator = createStackNavigator();
const AppContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const {isAuthenticated, isLoading} = useSelector(
    (state: RootState) => state.auth,
  );
  const {theme} = useThemeContext();

  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{flex: 1, backgroundColor: theme.background}}>
        <Loader visible={isLoading} />
      </View>
    );
  }

  return (
    <AppStackNavigator.Navigator
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      {isAuthenticated ? (
        <AppStackNavigator.Screen
          name={StackNames.homeStack}
          component={MainStack}
        />
      ) : (
        <AppStackNavigator.Screen
          name={StackNames.authStack}
          component={AuthStack}
        />
      )}
    </AppStackNavigator.Navigator>
  );
};

export default AppContainer;
