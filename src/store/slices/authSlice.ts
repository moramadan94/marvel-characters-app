import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  saveAuthState,
  clearAuthState,
  checkUserAuthentication,
} from './authThunks';

interface AuthState {
  username: string;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  username: '',
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{username: string}>) => {
      state.username = action.payload.username;
      state.isLoading = false; // Ensure isLoading is set to false after login
      state.isAuthenticated = true; // Set isAuthenticated to true after login
    },
    logout: state => {
      state.username = '';
      state.isLoading = false; // Ensure isLoading is set to false after logout
      state.isAuthenticated = false; // Set isAuthenticated to false after logout
    },
  },
  extraReducers: builder => {
    // Handle saveAuthState thunk
    builder.addCase(saveAuthState.fulfilled, (state, action) => {
      state.username = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true; // Update isAuthenticated to true
    });
    builder.addCase(saveAuthState.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(saveAuthState.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false; // Ensure isAuthenticated is set to false on failure
    });

    // Handle checkUserAuthentication thunk
    builder.addCase(checkUserAuthentication.fulfilled, (state, action) => {
      state.username = action.payload || '';
      state.isLoading = false;
      state.isAuthenticated = !!state.username; // Update based on username presence
    });
    builder.addCase(checkUserAuthentication.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkUserAuthentication.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false; // Ensure isAuthenticated is set to false on failure
    });

    // Handle clearAuthState thunk
    builder.addCase(clearAuthState.fulfilled, state => {
      state.username = '';
      state.isLoading = false;
      state.isAuthenticated = false; // Ensure isAuthenticated is set to false after clearing
    });
    builder.addCase(clearAuthState.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(clearAuthState.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false; // Ensure isAuthenticated is set to false on failure
    });
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
