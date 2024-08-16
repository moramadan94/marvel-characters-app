import {moderateScale, scale, verticalScale} from '@styles';
import {ColorsThemeTypes} from '@utils/types';
import {StyleSheet} from 'react-native';

export default (theme: ColorsThemeTypes) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: scale(16),
    },
    characterImageContainer: {
      alignItems: 'center',
      marginBottom: verticalScale(16),
    },
    characterImage: {
      width: scale(200),
      height: verticalScale(200),
      borderRadius: scale(100),
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
    },
    characterName: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      marginBottom: verticalScale(8),
      color: theme.text,
    },
    characterDescription: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(30),
      color: theme.text,
    },
    comicsTitle: {
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      marginBottom: verticalScale(8),
      color: theme.text,
    },
    comicItem: {
      padding: scale(8),
      borderBottomWidth: 1,
      borderBottomColor: theme.text,
    },
    comicName: {
      fontSize: moderateScale(16),
      color: theme.text,
    },
    noComicsText: {
      fontSize: moderateScale(16),
      color: theme.text,
      textAlign: 'center',
      marginTop: verticalScale(16),
    },
  });
};
