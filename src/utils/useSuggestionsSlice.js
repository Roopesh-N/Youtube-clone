import { createSlice } from "@reduxjs/toolkit";

const useSuggestionsSlice=createSlice({
    name:"SuggestionsSlice",
    initialState:{},
    reducers:{
        addSuggestions:(state,actions)=>{
            // { searchtext: ["result1","result2",....]}
            state=Object.assign(state,actions.payload)
        },
        deleteSuggestion:(state,actions)=>{
            state=delete state[actions.payload]
        },
    }
})

export const {addSuggestions,deleteSuggestion}=useSuggestionsSlice.actions;
export default useSuggestionsSlice.reducer;
