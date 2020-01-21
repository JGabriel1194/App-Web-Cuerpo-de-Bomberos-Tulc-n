const pool = require('../database');

var Provinces = {
    listProvinces: async function(callback){
        const provinces = await pool.query('SELECT * FROM Provincia',callback);
        return provinces;
    },
    listProvinceId: async function(id,callback){
        const province = await pool.query('SELECT * FROM Provincia WHERE idProvincia = ?',[id],callback);
        return province;
    },
    addProvince: async function(newProvince,callback){
        const province = await pool.query('INSERT INTO Provincia SET ?',[newProvince],callback);
        return province;
    },
    editProvince: async function(id,newProvince,callback){
        const province = await pool.query('UPDATE Provincia SET ? WHERE idProvincia = ?',[newProvince,id],callback);
        return province;
    },
    delProvince: async function(id,callback){
        const province = await pool.query('DELETE FROM Provincia WHERE idProvincia = ?',[id],callback);
    }
};

module.exports = Provinces