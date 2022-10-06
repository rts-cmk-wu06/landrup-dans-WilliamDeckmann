// Imports
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// Context
import { ApiContext } from "../context/ContextProvider";
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Templates
import CalenderCard from "./CalenderCard";
import TextSmall from "../components/TextSmall";
import Loader from "../components/Loader";

const CalenderList = () => {

  // Context & authentication
  const { authenticated } = useContext(AuthContext);
  //const { token } = useContext(TokenContext);
  const { name, password } = useContext(UserContext);

  // Replace name
  const [idState, setIdState] = useState();
  useEffect(() => {  
    if (authenticated) {
      if (name.includes("instructor")) {
        let id = name.replace("instructor", "");
        console.log("id: " + id);
        setIdState(id);
      } else if (name.includes("user")) {
        let id = name.replace("user", "");
        console.log("id: " + id);
        setIdState(id);
      } else {
        setIdState("no-id-found");
      }
    }
  }, []);

  // Context & end-point
  const [token, setToken] = useState();
  const [activities, setActivities] = useState();
  const auth = "http://localhost:4000/auth/token";
  const api = useContext(ApiContext);
  const endPoint = `/users/${idState}`;

  // Login & loading
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // Loading
  useEffect(() => {

    // Only for testing!!!
    console.log(authenticated);
    console.log(token);
    console.log(name);
    console.log(password);
    console.log(api + endPoint);

    setLoading(false);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    setLoginError(undefined);
  
  axios
    .post(
      auth,
      {
        username: name,
        password: password,
      },
      {
        headers:
        {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        setToken(response.data.token);
        setLoginError(false);
        setLoading(false);
      } else {
        setLoginError(true);
        setLoading(false);
      }
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    
    // Only for testing!!!
    console.log("User created and token now updated!");
    console.log(authenticated);
    console.log(token);
    console.log(name);
    console.log(password);
    console.log(api + endPoint);

    axios
      .get(api + endPoint,
      {
        headers:
        {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then((result) => {
        console.log(result);
        //const converted = Object.values(result.data.activities);
        //setActivities(converted);
      })
      .catch(function (error) {
        setLoginError(true);
        setLoading(false);
      });
  }, [token]);
  useEffect(() => {}, [activities]);

  return (
    <div className="Calender-list">
      {authenticated ? (
        <div>
          {loading && <TextSmall text="Behandler calender..." />}
          {loginError && <TextSmall text="Noget gik galt!" />}
          <ul className="flex-flex-col">
            {/* {activities ? (
              activities.map((activity) => (
                <CalenderCard {...activity} />
              ))
            ) : (
              <Loader text="calender" />
            )} */}
            hey...
          </ul>
        </div>
      ) : (
        <TextSmall text="Venligst log in for at se dette indhold" />
      )}
    </div>
  );
};

export default CalenderList;
