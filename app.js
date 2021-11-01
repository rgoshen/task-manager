const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");

// middleware
app.use(express.json());
app.use("/api/v1/tasks", tasksRoutes);

// routes

// app.get('api/v1/tasks')                  - get all tasks
// app.post('api/v1/tasks')                 - create a new task
// app.get('api/v1/tasks/:id')              - get single task
// app.patch('api/v1/tasks/:id')            - update task
// app.delete('api/v1/tasks/:id)            - delete task

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}...`);
});
