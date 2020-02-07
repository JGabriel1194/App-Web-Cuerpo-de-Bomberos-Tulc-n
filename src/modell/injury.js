const pool = require('../database');

var Injury = {
    listInjury: async function(callback){
        const injury = await pool.query('SELECT * FROM TLesion',callback);
        return injury;
    },
    listInjuryId: async function(id,callback){
        const injury = await pool.query('SELECT * FROM TLesion WHERE idTLesion = ?',[id],callback);
        return injury;
    },
    addInjury: async function(newInjury,callback){
        const injury = await pool.query('INSERT INTO TLesion SET ?',[newInjury],callback);
        return injury;
    },
    editInjury: async function(id,newInjury,callback){
        const injury = await pool.query('UPDATE TLesion SET ? WHERE idTLesion = ?',[newInjury,id],callback);
        return injury;
    },
    deleteInjury: async function(id,callback){
        const injury = await pool.query('DELETE FROM TLesion WHERE idTLesion = ?',[id],callback);
        return injury;
    }
};

module.exports = Injury;