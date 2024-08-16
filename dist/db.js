"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// const { Pool } = require("pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres", // Default PostgreSQL user
    password: "debugging", // Password you set in the Docker command
    host: "localhost", // Since you're running the container locally
    port: 5433, // The port you mapped to 5432 inside the container
    database: "postgres", // Default database name in PostgreSQL
});
exports.pool = pool;
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
//# sourceMappingURL=db.js.map