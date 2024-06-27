import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../../apis/weatherApi";

const SearchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        location: "",
        searchResults: [],
    },
    reducers: {
        updateSearchLocation: (state, action) => {
            return {
                ...state,
                location: action.payload,
            };
        },
        getSearchResults: (state, action) => {
            return {
                ...state,
                searchResults: action.payload,
            }
        }
    }
});

export const {updateSearchLocation} = SearchSlice.actions;
export default SearchSlice.reducer;