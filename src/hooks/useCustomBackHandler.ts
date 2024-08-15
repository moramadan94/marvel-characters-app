import NavigationService from '@src/navigations/NavigationService';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useCustomBackHandler = (onBackPress?: () => void) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (onBackPress) {
          onBackPress();
        } else {
          NavigationService.goBack();
        }
        return true;
      },
    );

    return () => backHandler.remove();
  }, [onBackPress]);
};

export default useCustomBackHandler;
