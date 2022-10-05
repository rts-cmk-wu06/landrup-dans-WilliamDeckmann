// Imports
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Context
import { ApiContext } from "../context/ContextProvider";

// Templates
import PageContainer from "../templates/PageContainer";
import NavigationMenu from "../templates/NavigationMenu";

// Components
import Button from "../components/Button";
import TextMedium from "../components/TextMedium";
import TextSmall from "../components/TextSmall";
import Loader from "../components/Loader";

const Details = () => {
  // Signup function
  const SignUp = () => {
    console.log("clicked!");
  };

  // USer id
  const location = useLocation();
  const path = location.pathname.replace("/details/activity-", "");

  // Context & end-point
  const api = useContext(ApiContext);
  const endPoint = `/activities/${path}`;

  // Use-states
  const [activities, setActivities] = useState();

  // Fetch with Axios
  useEffect(() => {
    axios.get(api + endPoint).then((result) => {
      setActivities(result.data);
    });
  }, []);

  // Update with use-effect
  useEffect(() => {
  }, [activities]);

  return (
    <div className="Details h-screen grid">
      {activities ? (
        <div
          className="py-6 px-[27px] flex justify-end items-end bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${activities.asset.url})` }}
        >
          <Button text="Tilmeld" function={SignUp} />
        </div>
      ) : (
        <Loader text="details" contrast={true} />
      )}
      <PageContainer>
        {activities ? (
          <article className="flex flex-col gap-2">
            <header className="flex flex-col">
              <TextMedium text={activities.name} />
              <TextSmall
                text={`${activities.minAge}-${activities.maxAge} år`}
              />
            </header>
            <TextSmall text={activities.description} />
          </article>
        ) : (
          <Loader text="details" />
        )}
      </PageContainer>
      <NavigationMenu />
    </div>
  );
};

export default Details;