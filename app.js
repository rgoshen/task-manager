const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRoutes);

// error handling
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
