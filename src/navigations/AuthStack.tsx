import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/login';
import Settings from '@screens/settings';
import {MainRoutes} from '@utils/enums';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MainRoutes.Login} component={Login} />
      <Stack.Screen name={MainRoutes.Settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default AuthStack;
