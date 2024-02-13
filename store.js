import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Screen/Authentication/reducer/authSlice'
import storeFave from './Screen/Content/reducer/storeFave'
import commentSlice from './Screen/Content/reducer/commentSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
    store: storeFave,
    comment: commentSlice
  },
})