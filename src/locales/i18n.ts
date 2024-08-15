import {I18nManager} from 'react-native';
import {I18n} from 'i18n-js';
import en from '@locales/en.json';
import ar from '@locales/ar.json';

const translations = {
  en,
  ar,
};

const i18n = new I18n(translations);

i18n.defaultLocale = 'en';
i18n.locale = 'en'; // Initial locale
I18nManager.allowRTL(false);

export default i18n;
