import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import videoSliceReducer from "./videoSlice";
import SuggestionsSliceReducer from "./useSuggestionsSlice";
import searchResultsReducer from "./searchResultsSlice";
import chatSliceReducer from "./chatSlice";


const appstore = configureStore({

    reducer:{
        sidebar:sidebarReducer,
        nowPlaying:videoSliceReducer,
        SuggestionsSlice:SuggestionsSliceReducer,
        searchResultsSlice:searchResultsReducer,
        chat:chatSliceReducer,
    }
});

export default appstore;