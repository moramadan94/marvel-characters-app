import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import {Button, Text} from '@components/atoms';
import {translate} from '@utils/helpers';

interface ErrorComponentProps {
  errorMessage: string;
  imageSource: any;
  onRetry: () => void;
}

const ErrorView: React.FC<ErrorComponentProps> = ({
  errorMessage,
  imageSource,
  onRetry,
}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Button
        onPress={onRetry}
        overrideBtnStyle={styles.retryButton}
        overrideTextStyle={styles.retryText}
        title={translate('errors.retry')}
      />
    </View>
  );
};

export default ErrorView;
