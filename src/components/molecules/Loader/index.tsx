// Loader.tsx
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './style';
import {Colors} from '@styles';

interface LoaderProps {
  visible: boolean;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({visible, color = Colors.primary}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Animatable.View iterationCount="infinite">
        <ActivityIndicator size="large" color={color} />
      </Animatable.View>
    </View>
  );
};

export default Loader;
