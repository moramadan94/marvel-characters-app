import {CharacterList} from '@components/organisms';
import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {ErrorLogo} from '@assets/images';
import {ErrorView} from '@components/molecules';
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
    loadCharacters,
  } = useHome();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {errorMessage ? (
        <ErrorView
          errorMessage={errorMessage}
          imageSource={ErrorLogo}
          onRetry={loadCharacters}
        />
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
