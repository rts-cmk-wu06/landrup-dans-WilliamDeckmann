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
  const api = useContext(ApiContext);
  const endPoint = "/activities";
  const { searchState } = useContext(SearchContext);

  // Use-states
  const [activities, setActivities] = useState();
  
  // Fetch with Axios
  useEffect(() => {
    axios.get(api + endPoint).then((result) => {
      const converted = Object.values(result.data);
      setActivities(converted);
    });
  }, []);

  // Update with use-effect
  useEffect(() => {
  }, [activities]);

  return (
    <div className="Activity-list">
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