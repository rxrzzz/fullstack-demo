import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { WorkoutContextProvider } from "./context/workoutContext";
import { AuthContextProvider } from "./context/authContext";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <WorkoutContextProvider>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </WorkoutContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
