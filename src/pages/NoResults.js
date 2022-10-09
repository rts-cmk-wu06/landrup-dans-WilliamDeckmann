// Imports
import { useNavigate } from "react-router-dom";

// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import ActivityList from "../templates/ActivityList";

// Components
import TextLarge from "../components/TextLarge";
import TextSmall from "../components/TextSmall";
import Button from "../components/Button";

const NoResults = () => {

  const navigate = useNavigate()
  const Navigate = () => {
    navigate("/home");
  }

  return (
    <div className="Home min-h-screen">
      <PageContainer>
        <div className="flex flex-col gap-2">
          <TextLarge text='"404"' contrast={true} />
          <TextSmall text="Siden blev desværre ikke fundet..." contrast={true} />
        </div>
        <main className="flex flex-col gap-[31px] items-center">
          <img className="w-[75%]" src="https://img.icons8.com/ios/100/000000/broken-robot.png"/>
          <Button text="Vend tilabge til forsiden" function={Navigate} />
        </main>
      </PageContainer>
      <NavigationMenu/>
    </div>
  );
}
 
export default NoResults;