// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import PageHeader from "../templates/PageHeader";
import ActivityList from "../templates/ActivityList";

// Components
import TextLarge from "../components/TextLarge";

const Home = () => {

  // Styling
  const margin = "108px"

  return (
    <div className="Home bg-purple"
      style={{minHeight: `calc(100vh - ${margin})`}}
    >
      <PageHeader>
        <TextLarge text="Aktiviteter" />
      </PageHeader>
      <PageContainer topMargin={margin}>
        <ActivityList />
      </PageContainer>
      <NavigationMenu/>
    </div>
  );
}
 
export default Home;