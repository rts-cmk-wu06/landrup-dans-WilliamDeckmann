// Imports
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// Context
import { AuthContext } from "../context/ContextProvider";
import { TokenContext } from "../context/ContextProvider";
import { UserContext } from "../context/ContextProvider";

// Schema
import UserSchema from "../schema/UserSchema";

// Components
import TextLarge from "../components/TextLarge";
import TextSmall from "../components/TextSmall";
import Button from "../components/Button";

const LoginForm = () => {
  // Use-form & Yup-resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserSchema) });

  // Navigate
  const navigate = useNavigate();

  // Context
  const { setAuthenticated } = useContext(AuthContext);
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  // API fetch data
  const [loginError, setLoginError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const api = "http://localhost:4000";
  const endPoint = "/auth/token";

  const HandlePost = () => {

    // Loading
    setLoginError(undefined);
    setLoading(false);
    if (loginError == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios
      .post(
        api + endPoint,
        {
          username: userName,
          password: userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setAuthenticated(true);
          setToken(response.data.token);
          setUser(userName);
          setLoginError(false);
          setLoading(false);
          navigate("/calender")
        } else {
          setLoginError(true);
          setLoading(false);
        }
      })
      .catch(function (error) {
        setLoginError(true);
        setLoading(false);
      });
  };

  const UpdateName = (event) => {
    setUserName(event.target.value);
  };
  const UpdatePassword = (event) => {
    setUserPassword(event.target.value);
  };

  return (
    <div className="w-[332px] flex flex-col gap-[30px]">
      <TextLarge text="Log ind" />
      <form className="w-full flex flex-col items-center gap-[15px]" onSubmit={handleSubmit(HandlePost)}>
        {loading && <TextSmall text="Behandler login..." />}
        {loginError && <TextSmall text="Bruger findes ikke!" />}
        {errors.Name && <TextSmall text={errors.Name.message} />}
        <input
          id="Name"
          type="text"
          className="w-full px-[22px] py-[15px] bg-grey"
          placeholder="brugernavn"
          {...register("Name", {
            onChange: UpdateName,
          })}
        />
        {errors.Password && <TextSmall text={errors.Password.message} />}
        <input
          id="Password"
          type="text"
          className="w-full px-[22px] py-[15px] bg-grey"
          placeholder="adgangskode"
          {...register("Password", {
            onChange: UpdatePassword,
          })}
        />
        <Button text="Log in" />
      </form>
    </div>
  );
};

export default LoginForm;
