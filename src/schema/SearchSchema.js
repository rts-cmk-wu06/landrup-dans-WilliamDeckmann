// Imports
import * as yup from "yup";

// Regex
const searchRegex = /^[a-zA-Z0-9]*$/;

// Schema
const SearchSchema = yup.object({

  // Search
  Search: yup
  .string()
  .max(100, "*Brug venligst ikke mere end 100 karaktere")
  .matches(searchRegex, "*Brug venligst kun tal eller bogstaver"),
});

export default SearchSchema;