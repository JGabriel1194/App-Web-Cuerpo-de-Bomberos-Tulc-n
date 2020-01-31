const pool = require('../database');

var Cause = {
    listCause: async function(callback){
        const cause = await pool.query('SELECT * FROM Causa',callback);
        return cause;
    },
    listCauseId: async function(id,callback){
        const cause = await pool.query('SELECT * FROM Causa WHERE idCausa = ?',[id],callback);
        return cause;
    },
    addCause: async function(newCause,callback){
        const cause = await pool.query('INSERT INTO Causa SET ?',[newCause],callback);
        return cause;
    },
    editCause: async function(id,newCause,callback){
        const cause = await pool.query('UPDATE Causa SET ? WHERE idCausa = ?',[newCause,id],callback);
        return cause;
    },
    deleteCause: async function(id,callback){
        const cause = await pool.query('DELETE FROM Causa WHERE idCausa = ?',[id],callback);
        return cause;
    }
};

module.exports = Cause;