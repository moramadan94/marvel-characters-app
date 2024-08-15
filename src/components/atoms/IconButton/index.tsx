import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './style';
import {Colors} from '@styles';

interface IconButtonProps {
  onPress: () => void;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
  buttonSize?: number;
  buttonColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
  stroke?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon: Icon,
  iconSize = 24,
  buttonSize = 50,
  buttonColor,
  borderRadius = 25,
  style,
  stroke = Colors.primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          backgroundColor: buttonColor,
          borderRadius: borderRadius,
        },
        style,
      ]}
      activeOpacity={0.7}>
      <Icon width={iconSize} height={iconSize} stroke={stroke} />
    </TouchableOpacity>
  );
};

export default IconButton;
