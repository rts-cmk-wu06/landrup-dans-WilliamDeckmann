// Import
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { AuthContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Components
import TextLarge from "../components/TextLarge";

// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import PageHeader from "../templates/PageHeader";
import CalenderList from "../templates/CalenderList";
import CalenderRosterList from "../templates/CalenderRosterList";
import TextSmall from "../components/TextSmall";
import Loader from "../components/Loader";

const Calender = () => {

  // Styling
  const margin = "108px"

  // Context
  const { authenticated } = useContext(AuthContext);
  const { name } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  // Check for authentication
  useEffect(() => {
    if (!authenticated) {
      navigate("/login")
    }
  }, [authenticated])

  // Return to login
  const ShowList = () => {
    if (name.includes("user")) {
      return (
        <CalenderList />
      )
    } else if (name.includes("instructor")) {
      return (
        <CalenderRosterList />
      )
    }
  };

  return (
    <div className="Calender bg-purple"
      style={{minHeight: `calc(100vh - ${margin})`}}
    >
      <PageHeader>
        <TextLarge text="Kalender" />
      </PageHeader>
      <PageContainer topMargin={margin}>
        {authenticated ? ShowList() : (
          <div className="flex flex-col gap-2">
            <TextSmall text="Du skal være logget ind for at se det her indhold." />
            <Loader text="login side" />
          </div>
        )}
      </PageContainer>
      <NavigationMenu/>
    </div>
  );
}
 
export default Calender;