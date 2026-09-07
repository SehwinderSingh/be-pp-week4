const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON
const userRouter = require("./routes/userRouter.js");

// Use the userRouter for routes starting with /users
app.use("/users", userRouter);

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers.js");

// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours
app.get("/tours", getAllTours);

// POST /tours
app.post("/tours", createTour);

// GET /tours/:tourId
app.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/tours/:tourId", deleteTour);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
