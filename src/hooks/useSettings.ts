import {useThemeContext} from '@contexts/theme.context';
import NavigationService from '@src/navigations/NavigationService';
import {darkTheme} from '@src/theme/dark-theme';
import {AppDispatch, RootState} from '@store/index';
import {logout} from '@store/slices/authSlice';
import {clearAuthState} from '@store/slices/authThunks';
import {ThemeTypeEnum} from '@utils/enums';
import {useState} from 'react';
import {I18nManager} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const useSettings = () => {
  const {theme, changeTheme} = useThemeContext();
  const [selectedTheme, setSelectedTheme] = useState(
    theme === darkTheme ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT,
  );
  const dispatch: AppDispatch = useDispatch();
  const isRTL = I18nManager.isRTL;

  const {isAuthenticated, username} = useSelector(
    (state: RootState) => state.auth,
  );

  const handleThemeChange = (
    value: ThemeTypeEnum.LIGHT | ThemeTypeEnum.DARK,
  ) => {
    setSelectedTheme(value);
    changeTheme(value);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const handleLogout = async () => {
    if (isAuthenticated) {
      dispatch(logout()); // Update Redux state
      dispatch(clearAuthState()); // Clear from AsyncStorag
    } else {
      NavigationService.goBack(); // Go back if not authenticated
    }
  };
  return {
    handleThemeChange,
    selectedTheme,
    theme,
    isRTL,
    isAuthenticated,
    username,
    handleLogout,
    goBack,
  };
};

export default useSettings;
