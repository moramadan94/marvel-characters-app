import {moderateScale, scale, verticalScale} from '@styles';
import {I18nManager, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: scale(5),
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: scale(10),
    marginHorizontal: scale(5),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: verticalScale(50),
    paddingHorizontal: scale(10),
    fontSize: moderateScale(16),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  searchIcon: {
    width: scale(20),
    height: verticalScale(20),
    marginRight: scale(10),
  },
  clearButton: {
    padding: scale(8),
  },
  clearText: {
    fontSize: moderateScale(16),
    color: '#007bff',
  },
});
