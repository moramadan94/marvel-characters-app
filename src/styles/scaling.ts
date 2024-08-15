import {Dimensions, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 816;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export const scale = (size: number) => widthRatio * size;
export const verticalScale = (size: number) => heightRatio * size;
export const statusBarHeight = StatusBarManager.HEIGHT;

const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size: number, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;
