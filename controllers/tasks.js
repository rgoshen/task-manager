const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id, data: req.body });
};

const deleteTask = (req, res) => {
  res.json({ id: req.params.id, msg: "task deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
