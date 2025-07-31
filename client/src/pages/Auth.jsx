import React, { useState } from "react";
import { LuLoader } from "react-icons/lu";
import { data, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuth.store";

function Auth() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [loginInput, setloginInput] = useState({
    email: "",
    password: "",
  });
  const [signupinput, setSignupInput] = useState({
    userName: "",
    email: "",
    password: "",
  });
const {loading , Signup , Login } = useAuthStore()
  const changeInput = (e) => {  
    login
      ? setloginInput({
          ...loginInput,
          [e.target.name]: e.target.value,
        })
      : setSignupInput({ ...signupinput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();    
    if (login) {
      Login(loginInput)
      navigate("/")
    }
    else{
      Signup(signupinput)
      navigate("/")
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen    ">
      <div className=" h-[60%] w-[70%] lg:w-[30%] rounded-lg shadow-2xl  flex flex-col justify-center   items-center ">
        {login ? (
          <h1 className="text-3xl font-bold mb-4">Login</h1>
        ) : (
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        )}
        <div className="flex justify-between gap-10 mb-4">
          <button
            onClick={() => setLogin(true)}
            className={`cursor-pointer font-medium px-5 py-1  transition-all duration-300 rounded-xl ${
              login ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            login
          </button>
          <button
            onClick={() => setLogin(false)}
            className={`cursor-pointer font-medium px-5 py-1  transition-all duration-300 rounded-xl ${
              !login ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            Signup
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {
            !login && <input
            type="text"
            placeholder="name"
            name="userName"
            value={signupinput.userName}
            onChange={changeInput}
           className="border-2 border-gray-300 rounded-lg p-2 w-64"
          />
          }
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={login ? loginInput.email : signupinput.email}
            onChange={changeInput}
            className="border-2 border-gray-300 rounded-lg p-2 w-64"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={login ? loginInput.password : signupinput.password}
            onChange={changeInput}
            className="border-2 border-gray-300 rounded-lg p-2 w-64"
          />
          
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 w-64 hover:bg-blue-600 transition-all duration-300 text-center flex justify-center items-center"
          >
            {
              loading ? <LuLoader className=" text-2xl animate-spin" /> : login ? "login" : "signup"
            }
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default Auth;
