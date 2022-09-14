import React, { useState } from "react";
import { useWorkoutsContext } from "../context/workoutContext";

export const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(error);
      setError(json.msg);
    }
    if (response.ok) {
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label>Exercise Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Exercise Load:</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <label>Exercise Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
