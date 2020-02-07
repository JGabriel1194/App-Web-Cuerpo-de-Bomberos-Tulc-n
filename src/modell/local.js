const pool = require('../database');

var Local = {
    listLocal: async function(callback){
        const local = await pool.query('SELECT * FROM TLocal',callback);
        return local;
    },
    listLocalId: async function(id,callback){
        const local = await pool.query('SELECT * FROM TLocal WHERE idTLocal = ?',[id],callback);
        return local;
    },
    addLocal: async function(newLocal,callback){
        const local = await pool.query('INSERT INTO TLocal SET ?',[newLocal],callback);
        return local;
    },
    editLocal: async function(id,newLocal,callback){
        const local = await pool.query('UPDATE TLocal SET ? WHERE idTLocal = ?',[newLocal,id],callback);
        return local;
    },
    deleteLocal: async function(id,callback){
        const local = await pool.query('DELETE FROM TLocal WHERE idTLocal = ?',[id],callback);
        return local;
    }
}

module.exports = Local;