const pool = require('../database');

var Cantones = {
    listCnatones: async function(){
        const cantones = await pool.query("SELECT can.idCanton, can.Canton, prov.Provincia FROM Canton can LEFT JOIN Provincia prov ON prov.idProvincia = can.idProvincia");
        return cantones;
    },
    listCantonId: async function(id){
        const canton = await pool.query("SELECT * FROM Canton WHERE idCanton = ?",[id]);
        return canton;
    },
    addCanton: async function(newCanton){
        const canton = await pool.query("INSERT INTO Canton SET ?",[newCanton]);
        return canton;
    },
    editCanton: async function(id,newCanton){
        const canton = await pool.query("UPDATE Canton SET ? WHERE idCanton = ?",[newCanton,id]);
        return canton;
    },
    delCanton: async function(id){
        const canton = await pool.query("DELETE FROM Canton WHERE idCanton = ?",[id]);
        return canton;
    }
};

module.exports = Cantones;