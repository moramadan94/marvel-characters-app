import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {ColorsThemeTypes} from '@utils/types';
import {StyleSheet} from 'react-native';

export default (theme: ColorsThemeTypes) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: scale(18),
    },
    characterImageContainer: {
      alignItems: 'center',
      marginTop: verticalScale(15),
      marginBottom: verticalScale(30),
      marginHorizontal: scale(15),
    },
    characterImage: {
      width: '100%',
      height: verticalScale(200),
      maxHeight: verticalScale(200),
      borderRadius: scale(15),
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
    },
    characterName: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      marginBottom: verticalScale(20),
      color: theme.text,
    },
    characterDescription: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(30),
      paddingHorizontal: scale(8),
      color: theme.text,
    },

    comicsTitle: {
      fontSize: moderateScale(22), // Slightly larger font size
      fontWeight: 'bold',
      marginBottom: verticalScale(12), // Increased spacing
      color: theme.text,
    },
    comicItem: {
      padding: scale(12),
      backgroundColor: Colors.lightGrey,
      shadowColor: theme.text,
      shadowOffset: {width: 0, height: 2},
      marginBottom: verticalScale(8),
      borderRadius: scale(8),
      marginHorizontal: scale(8),
    },
    comicName: {
      fontSize: moderateScale(18),
      color: Colors.white,
    },
    noComicsText: {
      fontSize: moderateScale(18),
      color: theme.text,
      textAlign: 'center',
      marginTop: verticalScale(20),
    },
  });
};
