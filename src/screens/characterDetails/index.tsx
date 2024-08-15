import {CharacterDetailScreenProps} from '@utils/types';
import React, {useLayoutEffect} from 'react';
import {View, Animated, Image, Easing} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import style from './style';
import {getSecureImageUrl, translate} from '@utils/helpers';
import {useThemeContext} from '@contexts/theme.context';
import {Text} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

const CharacterDetail: React.FC<CharacterDetailScreenProps> = ({route}) => {
  const {character} = route.params;
  const {theme} = useThemeContext();
  const styles = style(theme);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: character?.name || translate('details.title'),
    });
  }, [navigation, character?.name]);

  const animationValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 2,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.characterImageContainer, animatedStyle]}>
        <Image
          source={{
            uri: getSecureImageUrl(
              `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`,
            ),
          }}
          style={styles.characterImage}
        />
      </Animated.View>
      <View style={styles.detailsContainer}>
        <Text style={styles.characterName}>{character.name}</Text>
        {character.description ? (
          <Text style={styles.characterDescription}>
            {character.description}
          </Text>
        ) : (
          <Text style={styles.characterDescription}>
            {translate('details.noDescription')}
          </Text>
        )}

        <Text style={styles.comicsTitle}> {translate('details.comics')}</Text>
        <FlatList
          data={character.comics.items}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View style={styles.comicItem}>
              <Text style={styles.comicName}>{item.name}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noComicsText}>
              {translate('details.noComics')}
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default CharacterDetail;
