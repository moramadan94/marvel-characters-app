import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoStyle: {
    height: verticalScale(60),
    width: scale(60),
    borderRadius: scale(30),
    paddingHorizontal: scale(25),
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
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
  },
  titleStyle: {
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(5),
    fontSize: moderateScale(20),
  },
});
