// Imports
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Context
import { ApiContext } from "../context/ContextProvider";
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Templates
import PageContainer from "../templates/PageContainer";

// Components
import Button from "../components/Button";
import TextMedium from "../components/TextMedium";
import TextSmall from "../components/TextSmall";
import Loader from "../components/Loader";

const DetailsContainer = () => {

  // Context & authentication
  const { authenticated } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
  const { id } = useContext(UserContext);

  // USer id
  const location = useLocation();
  const path = location.pathname.replace("/details/activity-", "");

  // Navigate
  const navigate = useNavigate();
  const Navigate = () => {
    navigate("/login")
  }

  // Context & end-point
  const [activity, setActivity] = useState();
  const [activities, setActivities] = useState();
  const [joined, setJoined] = useState(false);
  const api = useContext(ApiContext);
  const endPoint = `/activities/${path}`;
  const userEndPoint = `/users/${id}`;

  // Login & loading
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // Fetch activity with Axios
  useEffect(() => {
    axios.get(api + endPoint).then((result) => {
      console.log("Fetch details");
      console.log(result);
      setActivity(result.data);
    });
  }, []);

  // Fetch user with Axios
  useEffect(() => {
    console.log("test")
    if (authenticated) {
      axios
        .get(api + userEndPoint,
        {
          headers:
          {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((result) => {
          console.log("Fetch user");
          console.log(result);
          const converted = Object.values(result.data.activities);
          setActivities(converted);
        })
        .catch(function (error) {
          setLoginError(true);
          setLoading(false);
        });
    };
  }, [joined]);

  // Signup function
  const SignUp = () => {

    // Loading
    setLoginError(undefined);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios
    .post(api + userEndPoint + endPoint,
    {
      "body": ""
    },
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        setJoined(true)
        setLoginError(false);
        setLoading(false);
        console.log("Success med at tilmelde");
      } else {
        setLoginError(true);
        setLoading(false);
      }
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  };

  // Signup function
  const Leave = () => {

    // Loading
    setLoginError(undefined);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios
    .delete(api + userEndPoint + endPoint,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        setJoined(false)
        setLoginError(false);
        setLoading(false);
        console.log("Success med at forlade");
      } else {
        setLoginError(true);
        setLoading(false);
      }
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  };

  // Check state
  const CheckState = () => {
    let converted = Object.values(activities);
    if (converted.length > 0) {
      return (
        <div>
          {converted.map((item) => (
            <div>
              {item.id == activity.id ? (
                <Button text="Forlad" function={Leave} />
              ) : (
                <Button text="Tilmeld" function={SignUp} />
              )}
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <Button text="Tilmeld" function={SignUp} />
      )
    }
  }

  return (
    <div className="Details-container min-h-screen h-screen grid bg-purple">
      {activity ? (
        <div
          className="py-6 px-[27px] flex justify-end items-end bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${activity.asset.url})` }}
        >
        {authenticated ? (
          <div>
            {activities ? CheckState()  
              : (
              <Loader text="detaljer" />
            )}
          </div>
        ) : (
          <Button text="Log ind for at tilmelde dig" function={Navigate} />
        )}
        </div>
      ) : (
        <div className="p-7">
          <Loader text="details" />
        </div>
      )}
      <PageContainer>
        {activity ? (
          <article className="flex flex-col gap-2">
            <header className="flex flex-col">
              <TextMedium text={activity.name} />
              <TextSmall
                text={`${activity.minAge}-${activity.maxAge} år`}
              />
            </header>
            <TextSmall text={activity.description} />
          </article>
        ) : (
          <Loader text="details" />
        )}
      </PageContainer>
    </div>
  );
};

export default DetailsContainer;