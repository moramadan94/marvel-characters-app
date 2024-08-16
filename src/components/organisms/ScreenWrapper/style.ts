import {ColorsThemeTypes} from '@utils/types';
import {StyleSheet} from 'react-native';

export default (theme: ColorsThemeTypes) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
};
