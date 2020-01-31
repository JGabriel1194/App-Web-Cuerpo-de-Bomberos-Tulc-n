const pool = require('../database');

var Start = {
    listStart: async function(callback){
        const start = await pool.query('SELECT * FROM LInicio',callback);
        return start;
    },
    listStartId: async function(id,callback){
        const start = pool.query('SELECT * FROM LInicio WHERE idLInicio = ?',[id],callback);
        return start;
    },
    addStart: async function(newStart,callback){
        const start = pool.query('INSERT INTO LInicio SET ?',[newStart],callback);
        return start;
    },
    editStart: async function(id,newStart,callback){
        const start = pool.query('UPDATE LInicio SET ? WHERE idLInicio = ?',[newStart,id],callback);
        return start;
    },
    deleteStart: async function(id,callback){
        const start = pool.query('DELETE FROM LInicio WHERE idLInicio = ?',[id],callback);
        return start;
    }
}

module.exports = Start;