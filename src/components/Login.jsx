import React, { useState } from "react";
import Header from "./Header";

const Login = () => { 
     
    const [isSignInForm,setisSignForm]=useState(true)

    const handleSigupPage=()=>{
          setisSignForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="login body "
      />
      <form className="w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {( !isSignInForm &&<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-black  border border-white bg-opacity-70"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black  border border-white bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black border border-white bg-opacity-70"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign in":"Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSigupPage}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
