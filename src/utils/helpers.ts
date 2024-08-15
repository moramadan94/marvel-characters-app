import md5 from 'md5';
import {PRIVATE_KEY, PUBLIC_KEY, storageKeys} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import {LanguageEnum} from './enums';
import RNRestart from 'react-native-restart';
import i18n from '@locales/i18n';

const getHash = (timestamp: number) => {
  return md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
};

const getSecureImageUrl = (imagePath: string) => {
  return imagePath?.replace('http://', 'https://');
};

const handleLanguageChange = async (lng: string) => {
  i18n.locale = lng;
  await AsyncStorage.setItem(storageKeys.selectedLanguage, lng);
  const isRTL = lng === LanguageEnum.AR;
  I18nManager.forceRTL(isRTL);
  RNRestart.Restart();
};

const translate = (param: string) => {
  return i18n.t(param);
};

export {getHash, getSecureImageUrl, handleLanguageChange, translate};
