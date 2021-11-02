const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRoutes);

app.use(notFound);

const PORT = 3000;

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
