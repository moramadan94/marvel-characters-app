import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  ViewStyle,
  StyleProp,
  KeyboardTypeOptions,
} from 'react-native';
import style from './style';
import {useThemeContext} from '@contexts/theme.context';
import Text from '../Text';

interface TextInputProps {
  isError?: boolean | string | null;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  overrideStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  value: string;
  label?: string;
  overrideLabelStyle?: StyleProp<ViewStyle>;
}

const TextInput = ({
  onFocus,
  onBlur,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  overrideStyle,
  placeholder,
  value,
  label,
  overrideLabelStyle,
}: TextInputProps) => {
  const {theme} = useThemeContext();
  const {input, container, labelStyle} = style(theme);

  return (
    <View style={container}>
      {label && <Text style={[labelStyle, overrideLabelStyle]}>{label}</Text>}
      <RNTextInput
        style={[input, overrideStyle]}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={theme?.text}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

export default TextInput;
