import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import finText from '../assets/textContentFI.json'
import engText from '../assets/textContentENG.json'
import { textContent } from "../assets/textContentInterface";

interface LanguageState {
    language: string,
    content: textContent
}

const initialState = {
    language: 'FI',
    content: finText
} satisfies LanguageState as LanguageState

const languageSlice = createSlice({
    name: 'selectedLanguage',
    initialState,
    reducers: {
       setLanguage(state, action: PayloadAction<string>) {
         state.language = action.payload
         state.content = action.payload == 'FI' ? finText : engText
       }
    }

})

export const {setLanguage} = languageSlice.actions
export default languageSlice.reducer