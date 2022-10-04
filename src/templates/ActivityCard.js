// Imports
import { Link } from "react-router-dom";

// Components
import TextSmall from "../components/TextSmall";

const ActivityCard = (props) => {
  return (
    <Link to={`/details/activity-${props.id}`}>
      <div
        className="Activity-card h-[344px] flex fle-col items-end bg-no-repeat overflow-auto bg-cover bg-center rounded-[39px] rounded-br-none bg-purple"
        key={props.id}
        style={{ backgroundImage: "url(" + props.asset.url + ")" }}
      >
        <section
          className="w-full p-[25px] flex flex-col gap-2 rounded-tr-[39px] bg-pink"
          style={{ opacity: "0.8" }}
        >
          <TextSmall text={props.name} contrast={true} />
          <TextSmall text={`${props.minAge}-${props.maxAge} år`} contrast={true} />
        </section>
      </div>
    </Link>
  );
};

export default ActivityCard;
