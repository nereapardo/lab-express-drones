const express = require("express");
const router = express.Router();
const Drones = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  const drones = await Drones.find();
  res.render("../views/drones/list", { drones });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    const createDrone = await Drone.create(req.body);
    res.send(createDrone);
  } catch {}
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
