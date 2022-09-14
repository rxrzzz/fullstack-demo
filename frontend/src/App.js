import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { WorkoutContextProvider } from "./context/workoutContext";
const App = () => {
  return (
    <div>
      <WorkoutContextProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </WorkoutContextProvider>
    </div>
  );
};

export default App;
