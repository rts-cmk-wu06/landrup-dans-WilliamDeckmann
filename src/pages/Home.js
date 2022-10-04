// Templates
import NavigationMenu from "../templates/NavigationMenu";
import PageContainer from "../templates/PageContainer";
import PageHeader from "../templates/PageHeader";
import ActivityList from "../templates/ActivityList";

// Components
import TextLarge from "../components/TextLarge";

const Home = () => {
  return (
    <div className="Home">
      <PageContainer>
        <PageHeader>
          <TextLarge text="Aktiviteter" />
        </PageHeader>
        <ActivityList />
      </PageContainer>
      <NavigationMenu/>
    </div>
  );
}
 
export default Home;