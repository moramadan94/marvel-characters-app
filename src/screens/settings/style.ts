import {Colors, moderateScale, scale, verticalScale} from '@styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: scale(10),
    paddingVertical: verticalScale(30),
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonStyle: {
    position: 'absolute',
    left: 3,
    right: 3,
  },
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: scale(20),
  },

  welcomeTitleStyle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: scale(5),
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: scale(20),
  },

  themeContainer: {
    justifyContent: 'flex-start',
    padding: scale(20),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(15),
    paddingHorizontal: scale(5),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  logoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: scale(20),
    width: '100%',
  },

  button: {
    flex: 1,
    paddingVertical: verticalScale(10),
    marginHorizontal: scale(5),
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.lightGrey,
  },

  logoutButton: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: scale(5),
    paddingHorizontal: scale(5),
    width: '100%',
  },
  buttonText: {
    color: Colors.white, // Button text color
    fontWeight: 'bold',
  },

  logoutButtonText: {
    fontWeight: 'bold',
    paddingHorizontal: scale(5),
  },
});
