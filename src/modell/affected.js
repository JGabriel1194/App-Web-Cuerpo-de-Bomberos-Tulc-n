const pool = require('../database');

var Affected = {
    listAffected: {
        listAffected = async function(callback){
            const affected = await pool.query('SELECT * FROM Afectado',callback);
            return affected;
        },
        listAffectedId: async function(id,callback){
            const affected = await pool.query('SELECT * FROM Afectado WHERE idAfectado = ?',[id],callback);
            return affected;
        },
        addAffected: async function(newAffected,callback){
            const affected = await pool.query('INSERT INTO Afectado SET ?',[newAffected],callback);
            return affected;
        },
        editAffected: async function(id,newAffected,callback){
            const affected = await pool.query('UPDATE Afectado SET ? WHERE idAfectado = ?',[newAffected,id],callback);
            return affected;
        },
        deleteAffected: async function(id,callback){
            const affected = await pool.query('DELETE FROM Afectado WHERE idAfectado = ?',[id],callback);
            return affected;
        }
    }
}

module.exports = Affected;