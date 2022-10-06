// Imports
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loader from "../components/Loader";

// Context
import { ApiContext } from "../context/ContextProvider"

// Templates
import ActivityCard from "./ActivityCard";

const ActivityList = () => {

  // Context & end-point
  const [activities, setActivities] = useState();
  const api = useContext(ApiContext);
  const endPoint = "/activities";
  
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
          activities.map((activity) =>
            <ActivityCard {...activity} />
          )
        ) : (
          <Loader text="aktiviteter" />
        )}
      </ul>
    </div>
  );
}
 
export default ActivityList;