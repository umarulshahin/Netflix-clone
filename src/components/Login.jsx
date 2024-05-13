import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setisSignForm] = useState(true);
  const [Errormessage, setErrorMessage] = useState(null);

  const Email = useRef(null);
  const Password = useRef(null);
  const Username = useRef(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleButtonclick = () => {
    const message = CheckValidate(Email.current.value, Password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: Username.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/144984345?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              Navigate("./Browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Navigate("./Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Email and Password mismatch ! Please Enter valid Email and Password"
          );
        });
    }
  };

  const handleSigupPage = () => {
    setisSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="login body "
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={Username}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black  border border-white bg-opacity-70"
          />
        )}
        <input
          ref={Email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black  border border-white bg-opacity-70"
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black border border-white bg-opacity-70"
        />
        <p className="text-red-500 font-bold py-2 text-center">
          {Errormessage}
        </p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={HandleButtonclick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSigupPage}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
