// Imports
import { useContext } from "react";

// Context
import { AuthContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Templates
import DetailsContainer from "../templates/DetailsContainer";
import RosterList from "../templates/RosterList";
import NavigationMenu from "../templates/NavigationMenu";

const Details = () => {

  // Context
  const { authenticated } = useContext(AuthContext);
  const { name } = useContext(UserContext);

  // Return to login
  const ShowList = () => {
    if (authenticated) {
      if (name.includes("instructor")) {
        return (
          <RosterList />
        )
      } else {
        return (
          <DetailsContainer />
        )
      }
    } else {
      return (
        <DetailsContainer />
      )
    }
  };

  return (
    <div className="Details">
      {ShowList()}
      <NavigationMenu />
    </div>
  );
};

export default Details;
