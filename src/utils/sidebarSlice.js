import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        togglesidebar:(state)=>{
            state.isMenuOpen= !state.isMenuOpen;
        },
        closesidebar:(state)=>{
            state.isMenuOpen=false;
        }
    }
})

export const {togglesidebar,closesidebar}=sidebarSlice.actions;
export default sidebarSlice.reducer;

