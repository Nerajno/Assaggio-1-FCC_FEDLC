import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    preview: ''
}

const previewSlice = createSlice({
    name: 'preview',
    initialState,
    reducers: {
        updatePreview: (state, action) => {
            state.preview = action.payload
        }
    }
})

export const {updatePreview} = previewSlice.actions

export default previewSlice.reducer