import {MarvelLogo} from '@assets/images';
import {LoginForm} from '@components/organisms';
import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import {SettingsIcon} from '@assets/svg';
import NavigationService from '@src/navigations/NavigationService';
import {MainRoutes} from '@utils/enums';
import {useThemeContext} from '@contexts/theme.context';
import {IconButton, Text} from '@components/atoms';
import {translate} from '@utils/helpers';

const Login = () => {
  const {theme} = useThemeContext();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.iconButtonContainer}>
        <IconButton
          onPress={() => NavigationService.navigate(MainRoutes.Settings)}
          icon={SettingsIcon}
          iconSize={25}
          stroke={theme.text}
        />
        <Image
          source={MarvelLogo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btnContainer}>
        <Text style={[styles.titleStyle, {color: theme.text}]}>
          {translate('login.signIn')}
        </Text>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;
