import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signedIn: false
}

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        signIn(state){
            state.signedIn = true
        },
        signOut(state){
            state.signedIn = false
        }
    }
})

export const {signIn, signOut} = signInSlice.actions

export default signInSlice.reducer;