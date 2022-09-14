import React, { useEffect, useState } from "react";
import { WorkoutDetails } from "./WorkoutDetails";

export const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      {workouts &&
        workouts.map((workout) => (
          <React.Fragment key={workout._id}>
            <WorkoutDetails workout={workout} />
          </React.Fragment>
        ))}
    </div>
  );
};
