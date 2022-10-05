// Import
import { useContext } from "react";

// Context
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

const Calender = () => {

  // Context
  const { authenticated } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  return (
    <div className="Calender">
      Page: /calender<br/>
      Auth: {authenticated ? <>true</> : <>false</>}<br/>
      Token: {token}<br/>
      User: {user}<br/>
    </div>
  );
}
 
export default Calender;