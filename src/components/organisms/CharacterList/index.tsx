import {DetailsCharacter, HomeCharacter} from '@utils/types';
import React from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {styles} from './style';
import {CharacterCard} from '@components/molecules';
import {RefreshControl, TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '@components/atoms';
import {Image} from 'react-native-animatable';
import {SearchLogo} from '@assets/images';
import {translate} from '@utils/helpers';

interface CharacterListProps {
  characters: HomeCharacter[];
  onCharacterPress: (character: DetailsCharacter) => void;
  searchQuery: string;
  handleSearchChange: (query: string) => void;
  clearSearch: () => void;
  refreshing: boolean;
  onRefresh: () => void;
}

const CharacterList = ({
  characters,
  onCharacterPress,
  searchQuery,
  handleSearchChange,
  clearSearch,
  refreshing,
  onRefresh,
}: CharacterListProps) => {
  const renderItem = ({item}: {item: any}) => (
    <CharacterCard character={item} onCharacterPress={onCharacterPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={SearchLogo} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder={translate('home.searchCharacters')}
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#007bff']} // Color of the refresh control spinner
          />
        }
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default CharacterList;
