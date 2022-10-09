// Imports
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Context
import { ApiContext } from "../context/ContextProvider";
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Templates
import PageContainer from "./PageContainer";
import PageHeader from "./PageHeader";

// Components
import TextLargeSnippet from "../components/TextLargeSnippet";
import TextSmall from "../components/TextSmall";
import Loader from "../components/Loader";

const RosterList = () => {

  // Context & authentication
  const { authenticated } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
  const { id } = useContext(UserContext);

  // USer id
  const location = useLocation();
  const path = location.pathname.replace("/details/activity-", "");

  // Context & end-point
  const [roster, setRoster] = useState();
  const api = useContext(ApiContext);
  const endPoint = `/users/${id}/roster/${path}`;

  // Use-states & end-point
  const [activities, setActivities] = useState();
  const activitiesEndPoint = `/activities/${path}`;

  // Login & loading
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // Fetch with Axios
  useEffect(() => {

    // Loading
    setLoginError(undefined);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios.get(api + activitiesEndPoint).then((result) => {
      setActivities(result.data);
      setLoginError(false);
      setLoading(false);
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  }, []);

  // Fetch with Axios
  useEffect(() => {
    if (authenticated) {

      // Loading
      setLoginError(undefined);
      if (loginError == undefined) {
        setLoading(true);
      } else {
        setLoading(false);
      }

      axios
        .get(api + endPoint,
        {
          headers:
          {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((result) => {
          console.log(result);
          const converted = Object.values(result.data);
          setRoster(converted);
          setLoginError(false);
          setLoading(false);
        })
        .catch(function (error) {
          setLoginError(true);
          setLoading(false);
        });
    };
  }, []);

  const LoadName = () => {
    let converted = Object.values(activities);
    if (converted.length > 0) {
      return (
        <TextLargeSnippet text={activities.name} />
      )
    } else {
      return (
        <TextLargeSnippet text="Aktivitet" />
      )
    }
  }

  return (
    <div className="RosterList min-h-screen bg-purple">
      <PageContainer>
        <PageHeader>
          <div className="overflow-hidden">
            {activities ? LoadName() : <Loader text="aktivitets navn" />}
          </div>
        </PageHeader>
        {authenticated && (
          <div className="flex flex-col gap-2">
            {loading && (
              <section className="mb-2">
                <TextSmall text="Behandler calender..." />
              </section>
            )}
            {loginError && (
              <section className="mb-2">
                <TextSmall text="Noget gik galt!" />
              </section>
            )}
            <ul className="flex flex-col">
              {roster ? (
                roster.map((person) => (
                  <li>
                    <TextSmall text={`${person.firstname} ${person.lastname}`} />
                  </li>
                ))
              ) : (
                <Loader text="roster" />
              )}
            </ul>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
 
export default RosterList;