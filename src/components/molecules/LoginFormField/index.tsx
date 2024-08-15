import React from 'react';
import {KeyboardTypeOptions, View} from 'react-native';
import {styles} from './style';
import {TextInput} from '@components/atoms';

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

function LoginFormField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType,
}: FormFieldProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        overrideStyle={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export default LoginFormField;
