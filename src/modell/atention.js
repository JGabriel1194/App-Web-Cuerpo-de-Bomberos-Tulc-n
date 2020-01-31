const pool = require('../database');

var Atention = {
    listAtention: async function(callback){
        const atention = await pool.query('SELECT * FROM PAtencion',callback);
        return atention;
    },
    listAtentionId: async function(id,callback){
        const atention = await pool.query('SLECT * FROM PAtencion WHERE idPAtencion = ?',[id],callback);
        return atention;
    },
    addAtention: async function(newAtention,callback){
        const atention = await pool.query('INSERT INTO PAtencion SET ?',[newAtention],callback);
        return atention;
    },
    editAtention: async function(id,newAtention,callback){
        const atention = await pool.query('UPDATE PAtencion SET ? WHERE idPAtencion = ?',[newAtention,id],callback);
        return atention;
    },
    deleteAtention: async function(id,callback){
        const atention = await pool.query('DELETE FROM PAtencion WHERE idPAtencion = ?',[id],callback);
        return atention;
    }
};

module.exports = Atention;