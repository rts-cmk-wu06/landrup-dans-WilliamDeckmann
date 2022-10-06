// components
import TextLargeSnippet from "../components/TextLargeSnippet";
import TextSmall from "../components/TextSmall";

const CalenderCard = (props) => {
  console.log(props);
  return (
    <div className="Calender-card w-full py-[26px] px-9 flex flex-col gap-2 rounded-[11px]">
      <header className="overflow-hidden">
        <TextLargeSnippet text="Nameeeeeeeeeeeeeeeeee" />
      </header>
      <TextSmall text="info" />
    </div>
  );
}
 
export default CalenderCard;