import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    searchString: "",
    times_clicked_on_lens: 0,
    classNames: '',
    
};

const searchBarSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearchString: (state, action) => {
            state.searchString = action.payload;
        },
        incrementClicks: (state) => {
            state.times_clicked_on_lens += 1;
        },
        
    },
});

export const {updateSearchString, incrementClicks, changeClassName, changeVisibility} = searchBarSlice.actions;

export const selectSearchString = (state) => state.search.searchString;
export const select_times_clicked_on_lens = (state) => state.search.times_clicked_on_lens;


export default searchBarSlice.reducer;