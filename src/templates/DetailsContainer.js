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

  // Styling
  const margin = "24px"

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
  const [userData, setUserData] = useState();
  const [joined, setJoined] = useState(false);
  const api = useContext(ApiContext);
  const endPoint = `/activities/${path}`;
  const userEndPoint = `/users/${id}`;

  // Login & loading
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // Fetch activity with Axios
  useEffect(() => {

    // Loading
    setLoginError(undefined);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios.get(api + endPoint).then((result) => {
      setActivity(result.data);
      setLoginError(false);
      setLoading(false);
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  }, []);

  // Re-fetch user data
  const ReFecthUser = () => {
    if (authenticated) {

      // Loading
      setLoginError(undefined);
      if (loginError == undefined) {
        setLoading(true);
      } else {
        setLoading(false);
      }

      axios
        .get(api + userEndPoint,
        {
          headers:
          {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((result) => {
          const converted = Object.values(result.data.activities);
          setActivities(converted);
          setUserData(result.data)
          setLoginError(false);
          setLoading(false);
        })
        .catch(function (error) {
          setLoginError(true);
          setLoading(false);
        });
    };
  }

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
      setJoined(true)
      ReFecthUser()
      setLoginError(false);
      setLoading(false);
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
      setJoined(false)
      ReFecthUser()
      setLoginError(false);
      setLoading(false);
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  };

  // Fetch user with Axios
  useEffect(() => {
    ReFecthUser()
  }, [joined]);

  // Check state
  const CheckState = () => {
    let converted = Object.values(activities);
    if (converted.length > 0) {
      return (
        <div>
          {converted.map((item) => {

            // Check if ID Matches
            if(item.id == activity.id) {
              return (
                <Button text="Forlad" function={Leave} />
              )

            // Check if age is too low
            } else if (activity.minAge > userData.age) {
              return (
                <Button text="Bruger er for ung" />
              )
            
            // Check if age is too high
            } else if (activity.maxAge < userData.age) {
              return (
                <Button text="Bruger er for gammel" />
              )

            // Show button
            } else if (item.weekday == activity.weekday) {
              return (
                <Button text="Dato allerede booked" />
              )

            // Show button
            } else {
              return (
                <Button text="Tilmeld" function={SignUp} />
              )
            }}
          )}
        </div>
      )

    // Check if age is too low
    } else if (activity.minAge > userData.age) {
      return (
        <Button text="Bruger er for ung" />
      )
    
    // Check if age is too high
    } else if (activity.maxAge < userData.age) {
      return (
        <Button text="Bruger er for gammel" />
      )

    // Show button
    } else {
      return (
        <Button text="Tilmeld" function={SignUp} />
      )
    }
  }

  // First letter uppercase
  function FirstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="Details-container grid bg-purple"
      style={{minHeight: `calc(100vh - ${margin})`}}
    >
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
          <Loader text="detaljer" />
        </div>
      )}
      <PageContainer topMargin={margin}>
        {loading && (
          <section className="mb-2">
            <TextSmall text="Behandler detaljer..." />
          </section>
        )}
        {loginError && (
          <section className="mb-2">
            <TextSmall text="Noget gik galt!" />
          </section>
        )}
        {activity ? (
          <article className="flex flex-col gap-2">
            <header className="flex flex-col">
              <TextMedium text={activity.name} />
              <section className="flex gap-2">
                <TextSmall
                  text={`${activity.minAge}-${activity.maxAge} år`}
                />
                <TextSmall text="|" />
                <TextSmall text={`${FirstLetterUpperCase(activity.weekday)} ${activity.time}`} />
              </section>
            </header>
            <TextSmall text={activity.description} />
          </article>
        ) : (
          <Loader text="detaljer" />
        )}
      </PageContainer>
    </div>
  );
};

export default DetailsContainer;