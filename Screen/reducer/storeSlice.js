import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';

export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        Token: []
    },
    reducers: {
        ADD: (state, action) => {
            const uniqueId = action.payload;
            if (!state.Token.includes(uniqueId)) {
                state.Token = [...state.Token, uniqueId];
                Alert.alert(
                    '',
                    'Sheeshh 😩🕶🤏 Recipe Added',
                    [
                        {
                            text: 'OK',
                        },
                    ],
                );
            } else {
                // Handle duplicate addition (e.g., show an alert)

                Alert.alert(
                    '',
                    '⚠️ Warning!! Recipe is Already Added ⚠️',
                    [
                        { text: 'OK' },
                    ],
                );
            }
        },
        DELETE: (state, action) => {
            const idToDelete = action.payload;
            state.Token = state.Token.filter((id) => id !== idToDelete);
        },
    },
})

// Action creators are generated for each case reducer function
export const { ADD, DELETE } = storeSlice.actions

export default storeSlice.reducer