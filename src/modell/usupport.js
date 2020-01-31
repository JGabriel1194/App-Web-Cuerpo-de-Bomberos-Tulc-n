const pool = require('../database');

var USupport = {
    listSupports: async function(callback){
        const support = await pool.query('SELECT * FROM UApoyo',callback);
        return support;
    },
    listSupportId: async function(id,callback){
        const support = await pool.query('SELEC * FROM UApoyo WHERE idUApoyo = ?',[id],callback);
        return support;
    },
    addSupport: async function(newSupport,callback){
        const support = await pool.query('INSERT INTO UApoyo SET ?',[newSupport],callback);
        return support;
    },
    editSupport: async function(id,newSupport,callback){
        const support = await pool.query('UPDATE UApoyo SET ? WHERE idUApoyo',[newSupport,id],callback);
        return support;
    },
    deleteSupport: async function(id,callback){
        const support = await pool.query('DELETE FROM UApoyo WHERE idUApoyo = ?',[id],callback);
        return support;
    }
}

module.exports = USupport;