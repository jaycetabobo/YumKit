import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [{
    firstname: "Jayce",
    lastname: "Tabobo",
    birthdate: "01-10-02",
    username: "Jayce",
    email: "jaycetabobo5@gmail.com",
    password: "Jayce123",
    confirmpassword: "Jayce123",

    }],
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