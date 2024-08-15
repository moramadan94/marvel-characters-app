import {Colors, moderateScale} from '@styles';
import {I18nManager, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(16),
    color: Colors.primary,
    textAlign: 'justify',
    // alignSelf: 'flex-start',
  },

  rtl: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', // Sets writing direction to RTL
  },

  // rtl: {
  //   textAlign: 'right', // Aligns text to the right
  //   writingDirection: 'rtl', // Sets writing direction to RTL
  // },
  // ltr: {
  //   textAlign: 'left', // Aligns text to the left
  //   writingDirection: 'ltr', // Sets writing direction to LTR
  // },
  // ltr: {
  //   textAlign: 'left', // Aligns text to the left
  //   writingDirection: 'ltr', // Sets writing direction to LTR
  // },

  // rtl: {
  //   writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  // },
  // rtl: {
  //   writingDirection: 'rtl',
  // },
  // ltr: {
  //   writingDirection: 'ltr',
  // },
});
