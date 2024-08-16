import {useThemeContext} from '@contexts/theme.context';
import React from 'react';
import {SafeAreaView, ViewStyle, StatusBar, StatusBarStyle} from 'react-native';

import style from './style';
import {lightTheme} from '@src/theme/light-theme';

interface ScreenWrapperProps {
  children: React.ReactNode;
  viewStyle?: ViewStyle; // Optional additional styles
  statusBarStyle?: StatusBarStyle; // Optional StatusBar style
  statusBarBackgroundColor?: string; // Optional StatusBar background color (Android only)
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  viewStyle,
  statusBarStyle = 'dark-content', // Default to 'dark-content'
  statusBarBackgroundColor,
}) => {
  const {theme} = useThemeContext();

  const styles = style(theme);
  return (
    <SafeAreaView style={[styles.container, viewStyle]}>
      <StatusBar
        barStyle={
          theme === lightTheme
            ? 'dark-content'
            : 'light-content' || statusBarStyle
        }
        backgroundColor={theme.background || statusBarBackgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
