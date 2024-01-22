import { createSlice } from '@reduxjs/toolkit'

export const storeFave = createSlice({
  name: 'store',
  initialState: {
    favorites: []
  },
  reducers: {
    favInput: (state, action) => {
     state.favorites = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { favInput } = storeFave.actions

export default storeFave.reducer