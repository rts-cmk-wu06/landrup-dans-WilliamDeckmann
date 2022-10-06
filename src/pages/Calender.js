// Import
import { useContext } from "react";

// Context
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Components
import TextLarge from "../components/TextLarge";

// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import PageHeader from "../templates/PageHeader";
import CalenderList from "../templates/CalenderList";

const Calender = () => {

  // Context
  const { authenticated } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  return (
    <div className="Calender min-h-screen bg-purple">
      <PageContainer>
        <PageHeader>
          <TextLarge text="Kalender" />
        </PageHeader>
        <CalenderList />
      </PageContainer>
      <NavigationMenu/>
      {/*
      Page: /calender<br/>
      Auth: {authenticated ? <>true</> : <>false</>}<br/>
      Token: {token}<br/>
      User: {user}<br/>
      */}
    </div>
  );
}
 
export default Calender;