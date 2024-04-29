const { Router } = require("express");
const {
  createTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/tasks", getAllTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

router.get("/tasks/:id", getTask);

module.exports = router;
