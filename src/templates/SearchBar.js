// Imports
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Context
import { SearchContext } from "../context/ContextProvider";

// Schema
import SearchSchema from "../schema/SearchSchema";

// Icons
import  SearchBarIcon from "../icons/SearchBarIcon"

// Components
import TextSmall from "../components/TextSmall";

const SearchBar = () => {

  // Use-form & Yup-resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SearchSchema) });

  // Use context
  const { searchState, setSearchState } = useContext(SearchContext);

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
    <div className="Search-bar px-[17px] py-[15px] bg-grey-faded my-3">
      <form onSubmit={handleSubmit(UpdateSearch)} className="flex justify-between gap-[17px]">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none" 
          {...register("Search", {
            onChange: UpdateInput,
          })}
        />
        <button>
          <SearchBarIcon />
        </button>
      </form>
      {errors.Search &&
        <section className="mt-2">
          <TextSmall text={errors.Search.message} />
        </section>
      }
    </div>
  );
}
 
export default SearchBar;