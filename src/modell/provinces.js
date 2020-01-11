const pool = require('../database');

var Provinces = {
    listProvinces: async function(){
        const provinces = await pool.query('SELECT * FROM Provincia');
        return provinces;
    },
    listProvinceId: async function(id){
        return id;
    },
    addProvince: async function(newProvince){
        const province = await pool.query('INSERT INTO Provincia SET ?',[newProvince]);
        return province;
    },
    editProvince: async function(id,newProvince){
        const province = await pool.query('UPDATE Provincia SET ? WHERE idProvincia = ?',[newProvince,id]);
        return province;
    },
    delProvince: async function(id){
        const province = await pool.query('DELETE FROM Provincia WHERE idProvincia = ?',[id])
    }
};

module.exports = Provinces