import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: ''
}

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        updateText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const {updateText} = textSlice.actions

export default textSlice.reducer