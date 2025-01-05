import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");  // Redirect to login page after logout
    } catch (err) {
      console.error(err.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
