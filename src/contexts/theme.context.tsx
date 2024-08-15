// ThemeContext.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import {darkTheme} from '@src/theme/dark-theme';
import {lightTheme} from '@src/theme/light-theme';
import {storageKeys} from '@utils/constants';
import {ThemeTypeEnum} from '@utils/enums';
import {ColorsThemeTypes, ModeContextType, ThemeTypes} from '@utils/types';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

const ThemeContext = createContext<ModeContextType>({} as ModeContextType);

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ColorsThemeTypes>(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(
          storageKeys.selectedTheme,
        );
        if (storedTheme) {
          const selectedTheme =
            storedTheme === ThemeTypeEnum.DARK ? darkTheme : lightTheme;
          setTheme(selectedTheme);
        }
      } catch (error) {
        console.error('Failed to load theme from AsyncStorage', error);
      }
    };

    loadTheme();
  }, []);

  const saveTheme = async (theme1: ThemeTypes) => {
    try {
      await AsyncStorage.setItem(storageKeys.selectedTheme, theme1);
    } catch (error) {
      console.error('Failed to save theme to AsyncStorage', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    await saveTheme(
      newTheme === darkTheme ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT,
    );
  };

  const changeTheme = async (newTheme: ThemeTypes) => {
    const selectedTheme =
      newTheme === ThemeTypeEnum.DARK ? darkTheme : lightTheme;
    setTheme(selectedTheme);
    await AsyncStorage.setItem(storageKeys.selectedTheme, newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme: toggleTheme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export {ThemeContext, useThemeContext, ThemeProvider};
