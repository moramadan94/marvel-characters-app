import {scale, verticalScale} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emkanLogoStyle: {
    height: verticalScale(120),
    width: scale(120),
  },
  btnContainer: {
    padding: scale(20),
    width: '100%',
  },
  logoViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: verticalScale(20),
  },
});
