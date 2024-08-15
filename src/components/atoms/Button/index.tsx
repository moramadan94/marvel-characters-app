import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import getStyles from './style';
import Text from '../Text';
import {useThemeContext} from '@contexts/theme.context';

interface ButtonPropsInterface extends TouchableOpacityProps {
  title?: string;
  disabled?: boolean;
  overrideStyle?: StyleProp<ViewStyle>;
  overrideTextStyle?: StyleProp<ViewStyle> | any;
  overrideBtnStyle?: StyleProp<ViewStyle> | any;
  testID?: string;
}

const Button = ({
  disabled = false,
  title = 'Login',
  overrideStyle,
  overrideTextStyle,
  overrideBtnStyle,
  ...props
}: ButtonPropsInterface) => {
  const {theme} = useThemeContext();
  const styles = getStyles(theme);
  const disabledText = disabled ? styles.disabledTextStyles : null;
  const disabledButton = disabled ? styles.disabledButtonStyles : null;

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonStyles,
        disabledButton,
        overrideBtnStyle,
        overrideStyle,
      ]}>
      <Text
        text={title}
        style={[styles.textStyles, disabledText, overrideTextStyle]}
      />
    </TouchableOpacity>
  );
};

export default Button;
