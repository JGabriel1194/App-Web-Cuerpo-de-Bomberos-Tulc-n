const pool = require("../database");

var Users = {
  listUsers: async function() {
    const user = await pool.query(
      "SELECT per.idPersonal, per.Nombres, per.Apellidos, per.Cedula, ran.Rango, rol.Rol FROM Personal per LEFT JOIN Rango ran ON ran.idRango = per.idRango LEFT JOIN Roles rol ON rol.idRol = per.idRol"
    );
    return user;
  },
  deleteUser: async function(idPersonal){
    const user = await pool.query("DELETE FROM Personal WHERE idPersonal = ?",[idPersonal]);
    console.log('Hola',idPersonal)
    return user;
  }
};

module.exports = Users;
