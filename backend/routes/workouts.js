const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");
const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;

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
