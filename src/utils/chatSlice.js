import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,actions)=>{
            if(state.messages.length>{OFFSET_LIVE_CHAT}){
                state.messages.pop();
                state.messages.unshift(actions.payload);
                return ;
            }
            state.messages.unshift(actions.payload);
        },
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;