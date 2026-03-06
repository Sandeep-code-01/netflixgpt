import React from 'react'
import { Netflix_Logo_Url, Netflix_signout_url } from '../Utils/logo'
import { auth } from '../Utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error        ");
  console.error("Sign Out Error:", error);
});
}

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black to-transparent flex justify-between items-center z-10">

      {/* Netflix Logo */}
      <img 
        src={Netflix_Logo_Url} 
        alt="Netflix Logo"
        className="w-32 md:w-40"
      />

      {/* Profile + Signout */}
     {user && ( 
      <div className="flex items-center justify-between">
        <img 
          src={user.photoURL || Netflix_signout_url} 
          alt="Netflix Signout" 
          className="w-6 md:w-8 cursor-pointer"
        />
        <button onClick={handleSignOut} className="ml-4 px-4 py-1 bg-red-600 text-white rounded cursor-pointer">
          Sign Out
        </button>
      </div>)}

    </div>
  )
}

export default Header
