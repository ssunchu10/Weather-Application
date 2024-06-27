import { useDispatch, useSelector } from "react-redux";
import { updateSearchLocation } from "../state/Search/SearchSlice";


const SearchBar = () => {
    const searchState = useSelector((state) => state.searchState);
    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        dispatch(updateSearchLocation(event.target.value));
    }

    return(
        <div className="search-container">
            <input
            type="text"
            placeholder="Enter Location!"
            className="search-input-container"
            onChange={onChangeHandler}
            value={searchState.location}
            />
        </div>
    )
}

export default SearchBar;