const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny")); // Logging middleware

app.use(express.json()); // Middleware to parse JSON

const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
