import React, { useEffect } from "react";
import { WorkoutForm } from "../components/WorkoutForm";
import { WorkoutDetails } from "./WorkoutDetails";
import { useWorkoutsContext } from "../context/workoutContext";
import { useAuthContext } from "../context/authContext";

export const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json)
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
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
