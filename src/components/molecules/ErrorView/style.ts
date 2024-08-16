import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginVertical: verticalScale(60),
  },
  image: {
    width: scale(150),
    height: verticalScale(150),
    marginBottom: verticalScale(15),
  },
  errorText: {
    fontSize: moderateScale(20),
    color: Colors.red,
    textAlign: 'center',
    marginBottom: verticalScale(20),
    fontWeight: '300',
  },
  retryButton: {
    backgroundColor: Colors.red,
    width: scale(200),
    height: verticalScale(50),
    marginVertical: verticalScale(50),
  },
  retryText: {
    fontWeight: 'bold',
  },
});
