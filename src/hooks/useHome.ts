import {useLoadingContext} from '@contexts/loading.context';
import {useThemeContext} from '@contexts/theme.context';
import {fetchCharacters} from '@services/apis';
import NavigationService from '@src/navigations/NavigationService';
import {MainRoutes} from '@utils/enums';
import {APIError, DetailsCharacter, HomeCharacter} from '@utils/types';
import {useCallback, useEffect, useState} from 'react';

const useHome = () => {
  const {theme} = useThemeContext();
  const {setLoading} = useLoadingContext();
  const [characters, setCharacters] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCharacters, setFilteredCharacters] = useState<HomeCharacter[]>(
    [],
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadCharacters = async () => {
    setLoading(true);
    setRefreshing(false);
    try {
      //Fetch a list of characters with a maximum of 10 results
      // The 'limit' parameter specifies the number of characters to retrieve from the API.
      const res = await fetchCharacters({
        params: {
          limit: 1,
        },
      });
      setErrorMessage(null);
      setCharacters(res.data.results);
    } catch (err) {
      const apiError = err as APIError;
      setErrorMessage(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCharacters(characters);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(query),
      );
      setFilteredCharacters(filtered);
    }
  }, [searchQuery, characters]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handlePressCharacter = (character: DetailsCharacter) => {
    NavigationService.navigate(MainRoutes.CharacterDetail, {character});
  };

  return {
    characters,
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
  };
};

export default useHome;
