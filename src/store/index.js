import { configureStore } from '@reduxjs/toolkit'
import textReducer from './text/slice'
import previewReducer from './preview/slice'

const store = configureStore({
  reducer: {
    text: textReducer,
    preview: previewReducer,
  },
})

export default store;