import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"nowPlaying",
    initialState:{
        comments:null,
        videoInfo:null
    },
    reducers:{
        updateComments:(state,action)=>{
            state.comments=action.payload;
        },
        updateVideoInfo:(state,action)=>{
            state.videoInfo=action.payload;
        },
    }
})

export const {updateComments,updateVideoInfo}=videoSlice.actions;
export default videoSlice.reducer;