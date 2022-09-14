import React, { useEffect } from "react";
import { WorkoutForm } from "../components/WorkoutForm";
import { WorkoutDetails } from "./WorkoutDetails";
import { useWorkoutsContext } from "../context/workoutContext";

export const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
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
      <WorkoutForm />
    </div>
  );
};
