// Imports
import { useState, useContext, useEffect } from "react";

// Context
import { SearchContext } from "../context/ContextProvider";

// Icons
import  SearchBarIcon from "../icons/SearchBarIcon"

const SearchBar = () => {

  // Use context
  const { searchState, setSearchState } = useContext(SearchContext);

  // Handel submit
  const HandleSubmit = event => {
    event.preventDefault();
  };

  // Input state
  const [inputState, setInputState] = useState();

  // Update input
  const UpdateInput = (event) => {
      setInputState(event.target.value);
  };

  // Update search
  const UpdateSearch = () => {
    if(inputState == undefined) {
      setSearchState("")
    } else {
      setSearchState(inputState)
    }
  };

  useEffect(() => {
  }, [searchState]);

  return (
    <div className="Search-bar">
      <form onSubmit={HandleSubmit} className="px-[17px] py-[15px] my-2 flex justify-between gap-[17px] bg-grey-faded">
        <input type="text" onChange={UpdateInput} className="w-full bg-transparent focus:outline-none" />
        <button onClick={UpdateSearch}>
          <SearchBarIcon />
        </button>
      </form>
    </div>
  );
}
 
export default SearchBar;