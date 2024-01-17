import { createSlice } from '@reduxjs/toolkit'

export const storeFave = createSlice({
  name: 'store',
  initialState: {
    favorites: [{subject: ""}],
  },
  reducers: {
    INPUT: (state, action) => {
     state.users = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { INPUT } = storeFave.actions

export default storeFave.reducer