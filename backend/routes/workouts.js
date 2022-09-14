const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

//post a new workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout." });
});

//post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.json({ msg: "Error" });
  }
});

//for (backend testing 😶)
// router.post("/", async (req, res) => {
//     const { title, load, reps } = req.body;
//     try {
//       const workout = await Workout.create({ title, load, reps });
//       res.status(200).json(workout);
//     } catch (err) {
//       res.json({ msg: "Error" });
//     }
//   });
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
