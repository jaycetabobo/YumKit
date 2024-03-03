import { configureStore } from '@reduxjs/toolkit'
import storeSlice from './Screen/reducer/storeSlice'

export default configureStore({
    reducer: {
        store: storeSlice
    },
})