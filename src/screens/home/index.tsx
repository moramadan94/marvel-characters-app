import {CharacterList} from '@components/organisms';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

import useHome from '@hooks/useHome';

const Home = () => {
  const {
    errorMessage,
    handlePressCharacter,
    theme,
    handleSearchChange,
    filteredCharacters,
    searchQuery,
    clearSearch,
    refreshing,
    onRefresh,
  } = useHome();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : (
        <CharacterList
          characters={filteredCharacters}
          onCharacterPress={handlePressCharacter}
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
          clearSearch={clearSearch}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </View>
  );
};

export default Home;
