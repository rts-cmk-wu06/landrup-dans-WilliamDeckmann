// Templates
import LoginForm from "../templates/LoginForm";

// Assets
import Hero from "../assets/splash-image.jpg"

const Login = () => {
  return (
    <div className="Login">
      <div className="w-full h-screen bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${Hero})`, display: "grid", gridTemplate: "1fr / 100vw", placeItems: "center" }}
      >
        <div
          className=" w-[3000px] h-[480px] bg-purple-faded rotate-[-27deg]"
          style={{ gridColumn: "1 / 1", gridRow: "1 / 1" }}
        >
        </div>
        <main className="z-10"
          style={{ gridColumn: "1 / 1", gridRow: "1 / 1" }}
        >
          <LoginForm />
        </main>
      </div>
    </div>
  );
}
 
export default Login;