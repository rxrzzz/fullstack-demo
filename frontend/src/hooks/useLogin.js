import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setisLoading(true);
    setError(null);

    const response = await fetch("/api/user/login", {
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
      console.log("here!")
      localStorage.setItem("user", JSON.stringify(json));
      setError(null);
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { login, isLoading, error };
};
