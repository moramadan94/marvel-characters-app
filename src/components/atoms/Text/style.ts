import {Colors, moderateScale} from '@styles';
import {I18nManager, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(16),
    color: Colors.primary,
    textAlign: 'justify',
  },

  rtl: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', // Sets writing direction to RTL
  },
});
