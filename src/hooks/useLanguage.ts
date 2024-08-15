import i18n from '@locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageKeys} from '@utils/constants';
import {LanguageEnum} from '@utils/enums';
import {useEffect, useState} from 'react';
import {I18nManager} from 'react-native';

const useLanguage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLanguage = async () => {
      let savedLanguage = await AsyncStorage.getItem(
        storageKeys.selectedLanguage,
      );
      if (!savedLanguage) {
        savedLanguage = LanguageEnum.EN;
        await AsyncStorage.setItem(
          storageKeys.selectedLanguage,
          LanguageEnum.EN,
        );
      }
      i18n.locale = savedLanguage;
      I18nManager.forceRTL(savedLanguage === LanguageEnum.AR);
      setIsLoaded(true);
    };

    handleLanguage();
  }, []);

  return isLoaded;
};

export default useLanguage;
