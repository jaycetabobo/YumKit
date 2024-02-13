import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: []
  },
  reducers: {
    commentInput: (state, action) => {
     state.comments = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { commentInput } = commentSlice.actions

export default commentSlice.reducer