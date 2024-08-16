import React, {createContext, useState, ReactNode, useContext} from 'react';
import {useThemeContext} from './theme.context';
import {Loader} from '@components/molecules';

interface LoadingContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps>(
  {} as LoadingContextProps,
);

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({children}) => {
  const [loading, setLoading] = useState(false);
  const {theme} = useThemeContext();

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      {children}
      <Loader color={theme.text} visible={loading} />
    </LoadingContext.Provider>
  );
};

const useLoadingContext = () => useContext(LoadingContext);

export {LoadingContext, useLoadingContext, LoadingProvider};
