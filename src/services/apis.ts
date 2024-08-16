import axios from 'axios';
import {handleApiError} from './errorHandler';
import {BASE_URL, END_POINTS, PUBLIC_KEY} from '@utils/constants';
import {getHash} from '@utils/helpers';

export const fetchCharacters = async (params: any): Promise<any> => {
  const timestamp = Date.now();
  const hash = getHash(timestamp);
  params = {ts: timestamp, apikey: PUBLIC_KEY, hash, ...params};
  try {
    const response = await axios.get(`${BASE_URL}/${END_POINTS.characters}`, {
      params,
    });
    return response.data;
  } catch (error) {
    const handledError = handleApiError(error);
    throw handledError;
  }
};
