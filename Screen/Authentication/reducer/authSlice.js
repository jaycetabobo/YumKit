import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    logInToken: null
  },
  reducers: {
    REGISTER: (state, action) => {
     state.users = action.payload
    },
    LOGIN: (state, action) => {
      state.logInToken = action.payload
    },
    LOGOUT: (state) => {
      state.logInToken = null; // Clear the login token
      // Optionally, clear any other authentication-related state here
    },
  },
})

// Action creators are generated for each case reducer function
export const { REGISTER, LOGIN, LOGOUT } = authSlice.actions

export default authSlice.reducer