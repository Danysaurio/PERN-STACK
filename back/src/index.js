const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

app.use((err, req, res, next) => {
  console.log("🚀 ~ app.use ~ err:", err);

  return res.json({
    errror: true,
    message: err.message,
  });
});

app.listen(4000);

console.log("server in port-3000");
