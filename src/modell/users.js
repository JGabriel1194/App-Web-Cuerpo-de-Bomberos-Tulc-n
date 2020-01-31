const pool = require("../database");

var Users = {
  listUsers: async function() {
    const user = await pool.query(
      "SELECT per.idPersonal, per.Nombres, per.Apellidos, per.Cedula,per.image, ran.Rango, rol.Rol FROM Personal per LEFT JOIN Rango ran ON ran.idRango = per.idRango LEFT JOIN Roles rol ON rol.idRol = per.idRol"
    );
    return user;
  },
  listUserId: async function(id){
    console.log(id);
    const user = await pool.query(
      "SELECT per.idPersonal, per.Nombres, per.Apellidos, per.Cedula,per.image, ran.Rango, rol.Rol FROM Personal per LEFT JOIN Rango ran ON ran.idRango = per.idRango LEFT JOIN Roles rol ON rol.idRol = per.idRol WHERE per.idPersonal = ?",[id]
    )
    return user;
  },
  deleteUser: async function(id,callback){
    const user = await pool.query("DELETE FROM Personal WHERE idPersonal = ?",[id],callback);
    return user;
  }
};

module.exports = Users;
