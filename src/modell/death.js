const pool = require('../database');

var Death = {
    listDeath: async function(callback){
        const death = await pool.query('SELECT * FROM CMuerte',callback);
        return death;
    },
    listDeathId: async function(id,callback){
        const death = await pool.query('SELECT * FROM CMuerte WHERE idCMuerte = ?',[id],callback);
        return death;
    },
    addDeath: async function(newDeath,callback){
        const death = await pool.query('INSERT INTO CMuerte SET ?',[newDeath],callback);
        return death;
    },
    editDeath: async function(id,newDeath,callback){
        const death = await pool.query('UPDATE CMuerte SET ? WHERE idCMuerte = ?',[newDeath,id],callback);
        return death;
    },
    deleteDeath: async function(id,callback){
        const death = await pool.query('DELETE FROM CMuerte WHERE idCMuerte = ?',[id],callback);
        return death;
    }
};

module.exports = Death;