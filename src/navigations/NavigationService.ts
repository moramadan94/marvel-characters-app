import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {StackNames} from '@utils/enums';
import {MainStackParamList} from '@utils/types';

// export const navigationRef = createNavigationContainerRef();

let navigationRef: NavigationContainerRef<MainStackParamList> | null = null;

export function setNavigationRef(
  ref: NavigationContainerRef<MainStackParamList> | null,
) {
  navigationRef = ref;
}

function navigate(
  name: keyof MainStackParamList,
  params?: MainStackParamList[keyof MainStackParamList],
) {
  if (navigationRef?.isReady()) {
    const route = [name, {...params}];
    navigationRef?.navigate(...(route as never));
  }
}

function resetToStack(name: StackNames) {
  if (navigationRef?.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: name}],
      }),
    );
  }
}

function navigateToStack(
  stackName: StackNames,
  screenName: string,
  params?: object,
) {
  if (navigationRef?.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name: stackName,
        params: {
          screen: screenName,
          params: params,
        },
      }),
    );
  }
}

function goBack() {
  navigationRef && navigationRef.goBack();
}

export default {
  navigate,
  navigateToStack,
  resetToStack,
  goBack,
};
