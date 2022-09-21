import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Body</h1>
        </Link>
        <nav>
          {user && (
            <>
              {" "}
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </>
          )}
          {!user && (
            <>
              {" "}
              <Link to="/login">
                <h1>Login</h1>
              </Link>
              <Link to="/signup">
                <h1>Signup</h1>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
