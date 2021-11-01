const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");

// middleware
app.use(express.json());
app.use("/api/v1/tasks", tasksRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}...`);
});
