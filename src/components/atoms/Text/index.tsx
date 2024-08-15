import React from 'react';
import {
  I18nManager,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import {styles} from './style';

interface TextProps extends RNTextProps {
  text?: string | null;
}

const Text = ({children, text, style, ...props}: TextProps) => {
  return (
    <RNText
      {...props}
      style={[
        styles.text,
        {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'},
        style,
      ]}>
      {text}
      {children}
    </RNText>
  );
};

export default Text;
