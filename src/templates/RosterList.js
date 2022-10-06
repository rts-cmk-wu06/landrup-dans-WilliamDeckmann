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

  // Fetch with Axios
  useEffect(() => {
    axios.get(api + activitiesEndPoint).then((result) => {
      setActivities(result.data);
    });
  }, []);

  // Update with use-effect
  useEffect(() => {
  }, [activities]);

  // Login & loading
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  // Fetch with Axios
  useEffect(() => {
    if (authenticated) {
      axios
        .get(api + endPoint,
        {
          headers:
          {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((result) => {
          const converted = Object.values(result.data);
          setRoster(converted);
        })
        .catch(function (error) {
          setLoginError(true);
          setLoading(false);
        });
    };
  }, []);

  // Update with use-effect
  useEffect(() => {}, [roster]);

  return (
    <div className="RosterList min-h-screen bg-purple">
      <PageContainer>
        <PageHeader>
          <div className="overflow-hidden">
            <TextLargeSnippet text={activities.name} />
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