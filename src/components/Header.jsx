import {  signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const Navigate=useNavigate()
  const dispatch=useDispatch()
  const user =useSelector(store=>store.user)
  const handleSignout=()=>{
    
    signOut(auth).then(() => {
      Navigate("/")
    }).catch((error) => {
      Navigate("./error")
    });
  }
  return (
    <div className="z-10 absolute w-screen px-8 py2 bg-gradient-to-b from-black flex justify-between" >
      <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      { user &&(<div className="flex p-2">
        <img className="w-12 h-12 rounded-md " src={user.photoURL}  alt="" />
        <button onClick={handleSignout} className="font-bold p-1  text-white">logout</button>
      </div>)}
    </div>
  );
};

export default Header;
