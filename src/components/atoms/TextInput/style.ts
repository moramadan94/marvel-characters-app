import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {I18nManager, StyleSheet} from 'react-native';
import {ColorsThemeTypes} from '@utils/types';

export default (theme: ColorsThemeTypes) => {
  return StyleSheet.create({
    container: {
      marginBottom: verticalScale(10),
      marginHorizontal: scale(5),
      flex: 1,
    },
    input: {
      flex: 1,
      marginEnd: scale(2),
      borderRadius: scale(10),
      writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      paddingVertical: verticalScale(5),
      paddingStart: scale(15),
      backgroundColor: theme.background,
      color: theme?.text,
      borderColor: Colors.lightGrey,
      borderWidth: 1,
      padding: 0,
      marginVertical: verticalScale(5),
    },

    labelStyle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(5),
      color: theme?.text,
    },
  });
};
