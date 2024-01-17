import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Screen/Authentication/reducer/authSlice'
import storeFave from './Screen/Content/reducer/storeFave'

export default configureStore({
  reducer: {
    auth: authSlice,
    store: storeFave
  },
})