// React native team recomended :
// Never store sensitive API keys in your app code.
// Anything included in your code could be accessed in plain text by anyone inspecting the app bundle.
// Tools like react-native-dotenv and react-native-config are great for adding environment-specific variables like API endpoints,
// but they should not be confused with server-side environment variables, which can often contain secrets and API keys.
// source : https://reactnative.dev/docs/security#storing-sensitive-info

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = '8f51c4c2d0ed2851676c124b17902d9b';
const PRIVATE_KEY = '1fcd5e3f8b2106209fa85981ca9af15bbfda7177';

const END_POINTS = {
  characters: 'characters',
};

const storageKeys = {
  selectedLanguage: 'selectedLanguage',
  selectedTheme: 'selectedTheme',
};

export {BASE_URL, END_POINTS, PUBLIC_KEY, PRIVATE_KEY, storageKeys};
