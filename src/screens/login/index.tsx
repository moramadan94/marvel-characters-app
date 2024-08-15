import {MarvelLogo} from '@assets/images';
import {LoginForm} from '@components/organisms';
import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import {SettingsIcon} from '@assets/svg';
import IconButton from '@components/atoms/IconButton';
import NavigationService from '@src/navigations/NavigationService';
import {MainRoutes} from '@utils/enums';
import {useThemeContext} from '@contexts/theme.context';

const Login = () => {
  const {theme} = useThemeContext();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.iconButtonContainer}>
        <IconButton
          onPress={() => NavigationService.navigate(MainRoutes.Settings)}
          icon={SettingsIcon}
          iconSize={30}
          stroke={theme.text}
        />
      </View>

      <View style={styles.logoViewStyle}>
        <Image
          source={MarvelLogo}
          style={styles.emkanLogoStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btnContainer}>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;
