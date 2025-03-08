import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './reducers/languageReducer.tsx'

const store = configureStore({
  reducer:{
    selectedLanguage: languageReducer
  }
})

export type AppState = ReturnType<typeof store.getState>
export default store