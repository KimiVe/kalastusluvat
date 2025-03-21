import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
import userProfileReducer from "./reducers/userReducer"; 
import licenceReducer from "./reducers/licenceReducer"
import signInReducer from "./reducers/signInReducer"

const store = configureStore({
  reducer: {
    selectedLanguage: languageReducer,
    userProfile: userProfileReducer,
    licences: licenceReducer,
    signIn: signInReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;