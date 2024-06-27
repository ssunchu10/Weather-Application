import { useDispatch, useSelector } from "react-redux";
import { updateSearchLocation, getData } from "../../state/Search/SearchSlice";
import './SearchBar.css';

const SearchBar = () => {
  const searchState = useSelector((state) => state.searchState);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    dispatch(updateSearchLocation(event.target.value));
  };

  const onSubmitHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(getData());
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter Location!"
        className="search-input-container"
        onChange={onChangeHandler}
        value={searchState.location}
        onKeyPress={onSubmitHandler}
      />
    </div>
  );
};

export default SearchBar;
