// components
import { Link } from "react-router-dom";
import TextLargeSnippet from "../components/TextLargeSnippet";
import TextSmall from "../components/TextSmall";

const CalenderCard = (props) => {

  // First letter uppercase
  function FirstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <Link to={`/details/activity-${props.id}`}>
      <div className="Calender-card w-full py-[26px] px-9 flex flex-col gap-2 rounded-[11px] bg-grey">
        <header className="overflow-hidden">
          <TextLargeSnippet text={props.name} contrast={true} />
        </header>
        <TextSmall text={`${FirstLetterUpperCase(props.weekday)} ${props.time}`} contrast={true} />
      </div>
    </Link>
  );
}
 
export default CalenderCard;