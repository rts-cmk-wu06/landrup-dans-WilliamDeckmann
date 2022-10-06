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

const Calender = () => {

  // Context
  const { authenticated } = useContext(AuthContext);
  const { name } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  // Return to login
  const Navigate = () => {
    navigate("/login")
  };

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
    <div className="Calender min-h-screen bg-purple">
      <PageContainer>
        <PageHeader>
          <TextLarge text="Kalender" />
        </PageHeader>
        {authenticated ? ShowList() : Navigate()}
      </PageContainer>
      <NavigationMenu/>
    </div>
  );
}
 
export default Calender;