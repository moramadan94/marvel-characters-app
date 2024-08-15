import {LanguageEnum, ThemeTypeEnum} from '@utils/enums';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors} from '@styles';
import IconButton from '@components/atoms/IconButton';
import {CloseIcon, LogoutIcon} from '@assets/svg';
import {handleLanguageChange, translate} from '@utils/helpers';
import {Text} from '@components/atoms';
import {styles} from './style';
import useSettings from '@hooks/useSettings';

const Settings: React.FC = () => {
  const {
    handleThemeChange,
    selectedTheme,
    theme,
    isRTL,
    isAuthenticated,
    username,
    handleLogout,
    goBack,
  } = useSettings();

  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <View style={styles.headerContainer}>
        <IconButton
          onPress={() => goBack()}
          icon={CloseIcon}
          iconSize={30}
          style={styles.iconButtonStyle}
          stroke={theme.text}
        />
        <Text style={[styles.headerTitleStyle, {color: theme.text}]}>
          {translate('settings.title')}
        </Text>
      </View>

      {isAuthenticated && (
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeTitleStyle, {color: theme.text}]}>
            {translate('settings.welcome')}
          </Text>
          <Text style={[styles.headerTitleStyle, {color: theme.text}]}>
            {username}
          </Text>
        </View>
      )}

      <View style={styles.themeContainer}>
        <Text style={[styles.title, {color: theme.text}]}>
          {translate('settings.changeTheme')}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedTheme === ThemeTypeEnum.LIGHT
                    ? Colors.primary
                    : Colors.lightGrey,
              },
            ]}
            onPress={() => handleThemeChange(ThemeTypeEnum.LIGHT)}>
            <Text style={styles.buttonText}>{translate('settings.light')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedTheme === ThemeTypeEnum.DARK
                    ? Colors.primary
                    : Colors.lightGrey,
              },
            ]}
            onPress={() => handleThemeChange(ThemeTypeEnum.DARK)}>
            <Text style={styles.buttonText}>{translate('settings.dark')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.themeContainer}>
        <Text style={[styles.title, {color: theme.text}]}>
          {translate('settings.changeLanguage')}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isRTL ? Colors.lightGrey : Colors.primary,
              },
            ]}
            onPress={() => handleLanguageChange(LanguageEnum.EN)}>
            <Text style={styles.buttonText}>{translate('settings.en')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isRTL ? Colors.primary : Colors.lightGrey,
              },
            ]}
            onPress={() => handleLanguageChange(LanguageEnum.AR)}>
            <Text style={styles.buttonText}>{translate('settings.ar')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isAuthenticated && (
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity
            style={[styles.logoutButton]}
            onPress={handleLogout}>
            <LogoutIcon />

            <Text style={[styles.logoutButtonText, {color: theme.text}]}>
              {translate('settings.logout')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Settings;
