import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    loggedInUser: null
  },
  reducers: {
    REGISTER: (state, action) => {
     state.users = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { REGISTER } = authSlice.actions

export default authSlice.reducer