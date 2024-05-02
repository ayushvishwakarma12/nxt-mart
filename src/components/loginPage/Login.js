import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginButton, setLoginButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== "" && password !== "") {
      setLoginButton(false);
    } else {
      setLoginButton(true);
    }
  }, [username, password]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
    } else {
      setError(false);
    }
    try {
      const response = await fetch("https://apis.ccbp.in/login", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Cookies.set("jwt-token", data.jwt_token);
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxClick = (e) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="login-page h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl px-10 py-10 rounded-lg w-[400px]">
        <form className="flex flex-col gap-2 w-full" onSubmit={onFormSubmit}>
          <div className="w-full flex justify-center items-center">
            <img
              src="./nxtMartLogo.png"
              alt="nxtmart-logo"
              className="h-[85px] w-[119px]"
            />
          </div>
          <label>username</label>
          <div className="flex border-slate-700 border-[1px] rounded-full items-center px-2 py-1">
            <FaRegUserCircle />
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="outline-none w-full px-2 text-slate-800"
            />
          </div>
          <label>Password</label>
          <div className="flex border-slate-700 border-[1px] rounded-full items-center px-2 py-1">
            <RiLockPasswordLine />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="outline-none w-full px-2 text-slate-800"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="checkbox"
              type="checkbox"
              className="mt-1"
              onChange={handleCheckboxClick}
            />
            <label htmlFor="checkbox" className="text-sm">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className={`${
              loginButton ? "bg-slate-400" : "bg-[#088C03]"
            } text-white py-[12px] px-[24px] text-lg cursor-pointer my-2`}
            disabled={loginButton}
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 font-semibold m-0 text-sm">
              Incorrect username or password
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
