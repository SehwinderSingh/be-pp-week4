const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers.js");

router.get("/", getAllTours);
router.get("/:tourId", getTourById);

router.use(auth); 

router.post("/", createTour);
router.put("/:tourId", updateTour);
router.delete("/:tourId", deleteTour);


module.exports = router;
 