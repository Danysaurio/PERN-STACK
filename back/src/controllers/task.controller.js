const pool = require("../db");

const getAllTask = async (req, res, next) => {
  try {
    const alltask = await pool.query("SELECT * FROM task");
    res.json(alltask.rows);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (task.rows < 1) {
      return res.status(404).json({
        message: "Tarea no encontrada",
      });
    }

    res.json(task.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTask, createTask, deleteTask, updateTask, getTask };
