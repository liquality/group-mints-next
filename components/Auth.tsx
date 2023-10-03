import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      console.log(result, "result from signing in", result.user.refreshToken);
    } catch (error) {
      console.log(error, "ERROR in Auth");
    }
  };
  return (
    <div className="auth">
      <p>Sign in with Google</p>
      <button onClick={signInWithGoogle}>Sign in</button>
    </div>
  );
};

export default Auth;
