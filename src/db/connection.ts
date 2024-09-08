import knex = require("knex");
import knexConfig from "./knexfile";

const db = knex(knexConfig);

export default db;
