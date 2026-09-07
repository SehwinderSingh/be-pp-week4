const express = require("express");
const router = express.Router();

const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers.js");

router.get("/", getAllTours);
router.post("/", createTour);
router.get("/:tourId", getTourById);
router.put("/:tourId", updateTour);
router.delete("/:tourId", deleteTour);

module.exports = router;