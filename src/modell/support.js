const pool = require('../database');

var Support = {
    listSupports: async function(callback){
        const support = await pool.query('SELECT * FROM ApoyoA',callback);
        return support;
    },
    listSupportId: async function(id,callback){
        const support = await pool.query('SELEC * FROM ApoyoA WHERE idApoyoA = ?',[id],callback);
        return support;
    },
    addSupport: async function(newSupport,callback){
        const support = await pool.query('INSERT INTO ApoyoA SET ?',[newSupport],callback);
        return support;
    },
    editSupport: async function(id,newSupport,callback){
        const support = await pool.query('UPDATE ApoyoA SET ? WHERE idApoyoA',[newSupport,id],callback);
        return support;
    },
    deleteSupport: async function(id,callback){
        const support = await pool.query('DELETE FROM ApoyoA WHERE idApoyoA = ?',[id],callback);
        return support;
    }
}

module.exports = Support;