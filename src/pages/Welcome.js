// Imports
import { useNavigate } from "react-router-dom";

// Assets
import Hero from "../assets/splash-image.jpg"

// Icons
import DansIcon from "../icons/DansIcon";
import LandrupIcon from "../icons/LandrupIcon";

// Components
import Button from "../components/Button";

const Welcome = () => {
  
  // Navigate
  const navigate = useNavigate();
  const Navigate = () => {
    navigate("/home");
  }

  return (
    <div className="Welcome w-full h-screen flex flex-col justify-end bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
      <section>
        <div className="pl-[44px] pb-4 flex flex-col gap-2">
          <LandrupIcon />
          <DansIcon />
        </div>
        <div className="w-[242px] h-[14px] bg-purple"></div>
      </section>
      <footer className="w-full mb-[53px] mt-[189px] flex justify-center">
        <Button text="Kom i gang" function={Navigate} />
      </footer>
    </div>
  );
}
 
export default Welcome;