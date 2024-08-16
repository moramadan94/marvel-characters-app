import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {ColorsThemeTypes} from '@utils/types';
import {I18nManager, StyleSheet} from 'react-native';

export default (theme: ColorsThemeTypes) => {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: scale(10),
      marginVertical: verticalScale(8),
      borderRadius: 15,
      backgroundColor: Colors.lightShadeGray,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 3,
      borderColor: Colors.lightShadeGray,
    },
    thumbnail: {
      width: scale(60),
      height: verticalScale(60),
      borderRadius: scale(30),
      marginRight: scale(10),
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    name: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      marginBottom: verticalScale(4),
      paddingHorizontal: scale(5),
    },
    description: {
      fontSize: moderateScale(14),
      color: theme.text,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: scale(15),
    },
    chevronRight: {
      width: scale(10),
      height: verticalScale(10),
      borderRightWidth: 2,
      borderBottomWidth: 2,
      color: theme.text,
      transform: [{rotate: I18nManager.isRTL ? '45deg' : '320deg'}],
    },

    arrowIcon: {
      width: scale(10),
      height: verticalScale(10),
      transform: [{rotate: I18nManager.isRTL ? '0deg' : '180deg'}],
    },
  });
};
