const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    return res.status(200).json(workouts);
  } catch (err) {
    return res.status(404);
  }
};

//get a single workout
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    return res.status(200).json(workout);
  } catch (err) {
    return res.status(404).json({ error: `${err.message}` });
  }
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    return res.status(200).json(workout);
  } catch (err) {
    return res.json({ msg: "Error" });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  try {
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.json({ msg: "Error" });
    }
  } catch (err) {
    return res.json({ msg: "Error" });
  }
};

//update  a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (workout) {
    res.status(200).json(workout);
  }
  if (!workout) {
    return res.json({ msg: "Error" });
  }
};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
