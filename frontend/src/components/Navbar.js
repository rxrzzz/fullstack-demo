import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Body</h1>
        </Link>
        <nav>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
          <Link to="/signup">
            <h1>Signup</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};
