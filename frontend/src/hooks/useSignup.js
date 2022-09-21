import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export const useSignup = () => {
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setisLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    const json = await response.json();
    if (!response.ok) {
      setisLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      setError(null);
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { signup, isLoading, error };
};
