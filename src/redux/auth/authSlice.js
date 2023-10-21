import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operationsAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [login.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export const authReducer = authSlice.reducer;
