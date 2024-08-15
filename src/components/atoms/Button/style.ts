import {StyleSheet} from 'react-native';
import {Colors, scale, verticalScale} from '@styles';
import {lightTheme} from '@src/theme/light-theme';

export default (theme = lightTheme) => {
  return StyleSheet.create({
    buttonStyles: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: Colors.primary,
      width: '100%',
      height: verticalScale(52),
      borderRadius: scale(12),
      backgroundColor: theme.primary,
    },
    disabledButtonStyles: {
      shadowColor: Colors.brownGrey,
      backgroundColor: Colors.veryLightPink,
    },
    textStyles: {
      flexDirection: 'row',
      alignItems: 'center',
      color: Colors.white,
    },
    disabledTextStyles: {
      color: Colors.white,
    },
  });
};
