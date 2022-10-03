// Imports
import { Routes, Route } from "react-router-dom";

// Templates
import ContextProvider from "./templates/ContextProvider"
import NavigationMenu from "./templates/NavigationMenu";

// Just for testing
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // Just for testing
  const [activities, setActivities] = useState();
  const url = "http://localhost:4000/api/v1";
  const endPoint = "/activities";

  // Just for testing
  useEffect(() => {
    axios.get(url + endPoint).then((result) => {
      const converted = Object.values(result.data);
      setActivities(converted);
    });
  }, []);
  useEffect(() => {
    console.log(activities);
  }, [activities]);

  return (
    <ContextProvider>
        CURRENT PAGE:
        <div className="App">
          <Routes>
            <Route exact path="/" element={<div>welcome</div>} />
            <Route exact path="/home" element={<div>home</div>} />
            <Route exact path="/search" element={<div>search</div>} />
            <Route exact path="/calender" element={<div>calender</div>} />
            <Route
              exact
              path="/details/class-:id"
              element={<div>welcome</div>}
            />
            <Route exact path="/login" element={<div>welcome</div>} />
            <Route path="*" element={<div>nothing found...</div>} />
          </Routes>
          <div>
            ACTIVITIES:
            {activities ? (
              activities.map((activity) =>
                <div>{activity.name}</div>
              )
            ) : (
              <div>
                loading...
              </div>
            )}
          </div>
          <NavigationMenu />
        </div>
    </ContextProvider>
  );
}

export default App;
