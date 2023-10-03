// components/ProtectedRoute.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";
import { globalState } from "../state";
import { checkAuth } from "../helper";

const ProtectedRoute = ({ children }) => {
  //const snap = useSnapshot(globalState);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkAuth();
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return children;
};

export default ProtectedRoute;
