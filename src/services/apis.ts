import axios from 'axios';
import {handleApiError} from './errorHandler';
import {BASE_URL, END_POINTS, PUBLIC_KEY} from '@utils/constants';
import {getHash} from '@utils/helpers';
import {FetchCharactersConfig} from '@utils/types';

export const fetchCharacters = async (
  extraConfig: FetchCharactersConfig = {},
): Promise<any> => {
  const timestamp = Date.now();
  const hash = getHash(timestamp);

  const config = {
    params: {
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
      ...extraConfig?.params,
    },
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/${END_POINTS.characters}`,
      config,
    );
    return response.data;
  } catch (error) {
    const handledError = handleApiError(error);
    throw handledError;
  }
};
