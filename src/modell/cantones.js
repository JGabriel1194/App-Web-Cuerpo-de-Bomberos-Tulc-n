const pool = require('../database');

var Cantones = {
    listCnatones: async function(callback){
        const cantones = await pool.query("SELECT can.idCanton, can.Canton, prov.Provincia FROM Canton can LEFT JOIN Provincia prov ON prov.idProvincia = can.idProvincia",callback);
        return cantones;
    },
    listCantonId: async function(id,callback){
        const canton = await pool.query("SELECT * FROM Canton WHERE idCanton = ?",[id],callback);
        return canton;
    },
    addCanton: async function(newCanton,callback){
        const canton = await pool.query("INSERT INTO Canton SET ?",[newCanton],callback);
        return canton;
    },
    editCanton: async function(id,newCanton,callback){
        const canton = await pool.query("UPDATE Canton SET ? WHERE idCanton = ?",[newCanton,id],callback);
        return canton;
    },
    delCanton: async function(id,callback){
        const canton = await pool.query("DELETE FROM Canton WHERE idCanton = ?",[id],callback);
        return canton;
    },
    listCantId: async function(id,callback){
        const canton = await pool.query("SELECT * FROM Canton WHERE idProvincia = ?",[id],callback);
        return canton;
    }
};

module.exports = Cantones;