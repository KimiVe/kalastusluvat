import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
import userProfileReducer from "./reducers/userReducer"; 

const store = configureStore({
  reducer: {
    selectedLanguage: languageReducer,
    userProfile: userProfileReducer
  },
});

export type AppState = ReturnType<typeof store.getState>;
export default store;