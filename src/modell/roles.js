const pool = require("../database");

var Roles = {
  listRoles: async function(callback) {
    const role = await pool.query("SELECT * FROM Roles",callback);
    return role;
  },
  listRoleId: async function(id,callback){
    const role = await pool.query('SELECT * FROM Roles WHERE idRol = ?',[id],callback);
    return role;
  },
  addRole: async function(newRole,callback){
    const role = await pool.query('INSERT INTO Roles SET ?',[newRole],callback);
    return role;
  },
  editRole: async function(id,newRole,callback){
    const role = await pool.query('UPDATE Roles SET ? WHERE idRol = ?',[newRole,id],callback);
    return role;
  },
  deleteRole: async function(id,callback){
    const role = await pool.query('DELETE FROM Roles WHERE idRol = ?',[id],callback);
    return role;
  }
};

module.exports = Roles;