import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../../apis/weatherApi";

export const getData = () => async(dispatch, getState) => {
    const appState = getState();
    const {searchState} = appState;
    const {location} = searchState;
    const apiResponse = await getWeather(location);
    console.log(apiResponse);
    if(apiResponse){
        dispatch(getSearchResults(apiResponse));
    }else {
        dispatch(getSearchResults(null));
    }
    
}

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

export const {updateSearchLocation, getSearchResults} = SearchSlice.actions;
export default SearchSlice.reducer;