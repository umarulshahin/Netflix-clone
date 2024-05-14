import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants"
const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      
      })
      .catch((error) => {
        Navigate("./error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/Browse")
        // ...
      } else {
        dispatch(removeUser());
        Navigate("/")
      }
    });
  }, []);
  
  return (
    <div className="z-10 absolute w-screen px-8 py2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-md mx-2 "
            src={user.photoURL}
            alt=""
          />
          <button
            onClick={handleSignout}
            className="font-bold rounded-sm mt-4 bg-red-600 w-24 h-8  text-white"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
