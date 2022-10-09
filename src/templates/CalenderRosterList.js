// Imports
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// Context
import { ApiContext } from "../context/ContextProvider";
import { AuthContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Templates
import CalenderCard from "./CalenderCard";

// Components
import Loader from "../components/Loader";

const CalenderRosterList = () => {

  // Context & authentication
  const { authenticated } = useContext(AuthContext);
  const { id } = useContext(UserContext);

  // Context & end-point
  const [activities, setActivities] = useState();
  const api = useContext(ApiContext);
  //const endPoint = `/users/${id}`;
  const endPoint = "/activities";

  // Fetch with Axios
  useEffect(() => {
    axios.get(api + endPoint).then((result) => {
      const converted = Object.values(result.data);
      setActivities(converted);
    });
  }, []);

  return (
    <div className="Calender-list">
      {authenticated && (
        <div>
          <ul className="flex flex-col gap-[30px]">
            {activities ? (
              activities.map((activity) => {
                if (activity.instructorId == id) {
                  return (
                    <CalenderCard {...activity} />
                  )
                }
              })
            ) : (
              <Loader text="calender" />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalenderRosterList;
