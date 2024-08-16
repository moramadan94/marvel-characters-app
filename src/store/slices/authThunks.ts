import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthState = createAsyncThunk(
  'auth/saveAuthState',
  async (username: string) => {
    await AsyncStorage.setItem('username', username);
    return username;
  },
);

export const checkUserAuthentication = createAsyncThunk(
  'auth/checkUserAuthentication',
  async (_, {rejectWithValue}) => {
    try {
      const username = await AsyncStorage.getItem('username');
      return username;
    } catch (error) {
      return rejectWithValue('Failed to check authentication state');
    }
  },
);

export const clearAuthState = createAsyncThunk(
  'auth/clearAuthState',
  async () => {
    await AsyncStorage.removeItem('username');
  },
);
