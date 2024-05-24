import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice=createSlice({
    name:"searchResultsSlice",
    initialState:{
        searchResults:[]
    },
    reducers:{
        updateSearchResults:(state,actions)=>{
            state.searchResults=actions.payload;
        }
    }
})

export const {updateSearchResults}=searchResultsSlice.actions;
export default searchResultsSlice.reducer