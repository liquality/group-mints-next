import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { checkAuth } from "../helper";
const cookies = new Cookies();
const Auth = () => {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      console.log(result, "result from signing in", result.user.refreshToken);
      router.push("/room");
    } catch (error) {
      console.log(error, "ERROR in Auth");
    }
  };

  console.log(checkAuth(), "check auth");
  return (
    <>
      {checkAuth() ? null : (
        <div className="auth">
          <p>Sign in with Google</p>
          <button onClick={signInWithGoogle}>Sign in</button>
        </div>
      )}
    </>
  );
};

export default Auth;
