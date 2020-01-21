const pool = require("../database");

var Roles = {
  listRoles: async function(callback) {
    const role = await pool.query("SELECT * FROM Roles",callback);
    return role;
  }
};

module.exports = Roles;