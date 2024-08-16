// const { Pool } = require("pg");
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres", // Default PostgreSQL user
  password: "debugging", // Password you set in the Docker command
  host: "localhost", // Since you're running the container locally
  port: 5433, // The port you mapped to 5432 inside the container
  database: "postgres", // Default database name in PostgreSQL
});

export { pool };
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
