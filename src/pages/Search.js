// Imports
import { useContext } from "react";

// Context
import { SearchContext } from "../context/ContextProvider";

// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import PageHeader from "../templates/PageHeader";
import SearchBar from "../templates/SearchBar";
import ActivityListFiltered from "../templates/ActivityListFiltered";

// Components
import TextLarge from "../components/TextLarge";
import TextSmall from "../components/TextSmall";

const Search = () => {
  // Context
  const { searchState } = useContext(SearchContext);

  const CheckInput = () => {
    if (searchState == undefined) {
      return (
        <TextSmall text="Klik for at søge." />
      );
    } else if (searchState == "") {
      return (
        <TextSmall text="Intet input..." />
      );
    } else {
      return (
        <ActivityListFiltered />
      )
    }
  }

  return (
    <div className="Search min-h-screen bg-purple">
      <PageContainer>
        <PageHeader>
          <TextLarge text="Søg" />
          <SearchBar />
        </PageHeader>
        {CheckInput()}
      </PageContainer>
      <NavigationMenu />
    </div>
  );
};

export default Search;
