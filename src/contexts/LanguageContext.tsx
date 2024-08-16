import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@locales/i18n';

// Define the context type
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Create a context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en', // default language
  setLanguage: () => {},
});

const LanguageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    // Load the selected language from AsyncStorage on mount
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        setLanguage(savedLanguage);
        i18n.locale = savedLanguage;
      } else {
        // Default to English if no language is set
        i18n.locale = 'en';
      }
    };

    loadLanguage();
  }, []);

  // Update the language and save it to AsyncStorage
  const handleSetLanguage = async (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.locale = newLanguage;
    await AsyncStorage.setItem('selectedLanguage', newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{language, setLanguage: handleSetLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageContext, LanguageProvider};
