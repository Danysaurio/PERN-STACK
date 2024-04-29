const { config } = require("dotenv");
config();

module.exports = {
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
};
