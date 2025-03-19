import { createSlice } from "@reduxjs/toolkit";
import licenceService from "../services/licenceService";
import { Dispatch } from "redux";

interface Licence {
    lupa_id: number;
    kalalaji: string;
    kalastusmuoto: string;
    maakunta: string;
    paikkakunta: string;
    vesisto: string;
    nimi: string;
  }
  
const initialState: Licence[] = [];

const licenceSlice = createSlice({
    name: 'licences',
    initialState,
    reducers: {
        setLicences(state, action){
            return action.payload
        }
    }
})

export const {setLicences} = licenceSlice.actions

export const initializeLicences = () => {
    return async (dispatch: Dispatch<{ payload: any; type: "licences/setLicences"; }>) => {
        const licences = await licenceService.getAll();
        dispatch(setLicences(licences))
    }
}

export default licenceSlice.reducer