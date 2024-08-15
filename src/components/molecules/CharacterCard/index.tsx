import {DetailsCharacter} from '@utils/types';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {getSecureImageUrl} from '@utils/helpers';
import {useThemeContext} from '@contexts/theme.context';
import {Text} from '@components/atoms';
import {LeftArrowLogo} from '@assets/images';

interface CharacterCardProps {
  character: DetailsCharacter;
  onCharacterPress: (character: DetailsCharacter) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onCharacterPress,
}) => {
  const {theme} = useThemeContext();
  const styles = style(theme);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onCharacterPress(character)}>
      <Image
        source={{
          uri: getSecureImageUrl(
            `${character.thumbnail.path}.${character.thumbnail.extension}`,
          ),
        }}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          source={LeftArrowLogo}
          resizeMode="contain"
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
