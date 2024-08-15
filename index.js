/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import i18n from '@locales';

// i18n.defaultLocale = 'ar';
// i18n.locale = 'ar';
AppRegistry.registerComponent(appName, () => App);
