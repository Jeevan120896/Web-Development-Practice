import { createSlice } from '@reduxjs/toolkit';

const tokenFromStorage = localStorage.getItem('token');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: tokenFromStorage,
    role: null,
    isLoggedIn: !!tokenFromStorage, 
    showSignup: false,
  },

  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      state.showSignup = false;
    },

    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = "TOKEN_" + Date.now();
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
    },

    loginFailed: (state) => {
      state.showSignup = true;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.role = null;
      state.showSignup = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setRole, loginSuccess, loginFailed, logout } = authSlice.actions;
export default authSlice.reducer;
