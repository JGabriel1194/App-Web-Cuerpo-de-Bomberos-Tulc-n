const pool = require("../database");

var Roles = {
  listRoles: async function() {
    const role = await pool.query("SELECT * FROM Roles");
    return role;
  }
};

module.exports = Roles;