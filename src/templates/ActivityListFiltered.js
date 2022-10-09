// Imports
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loader from "../components/Loader";

// Context
import { ApiContext } from "../context/ContextProvider"
import { SearchContext } from "../context/ContextProvider";

// Templates
import ActivityCard from "./ActivityCard";

// Components
import TextSmall from "../components/TextSmall";

const ActivityListFiltered = () => {

  // Context & end-point
  const [activities, setActivities] = useState();
  const api = useContext(ApiContext);
  const endPoint = "/activities";
  const { searchState } = useContext(SearchContext);

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

    axios.get(api + endPoint).then((result) => {
      const converted = Object.values(result.data);
      setActivities(converted);
      setLoginError(false);
      setLoading(false);
    })
    .catch(function (error) {
      setLoginError(true);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Activity-list">
      {loading && (
        <section className="mb-2">
          <TextSmall text="Behandler søgning..." />
        </section>
      )}
      {loginError && (
        <section className="mb-2">
          <TextSmall text="Noget gik galt!" />
        </section>
      )}
      <ul className="flex flex-col gap-[31px]">
        { activities ? (
          activities.map((activity, index) => {
            let current = activity.name.toLowerCase();
            if (current.includes(searchState.toLowerCase())) {
              return (
                <ActivityCard {...activity} />
              )
            } else if (index == 0) {
              return (
                <TextSmall text="Intet resultat matchede" />
              )
            }
          })
        ) : (
          <Loader text="aktiviteter" />
        )}
      </ul>
    </div>
  );
}
 
export default ActivityListFiltered;