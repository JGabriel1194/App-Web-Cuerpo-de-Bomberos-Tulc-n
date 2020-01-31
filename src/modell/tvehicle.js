const pool = require('../database');

var TVehicle = {
    listTVehicle: async function(callback){
        const tvehicle = await pool.query('SELECT * FROM TVehiculo',callback);
        return tvehicle;
    },
    listTVehicle: async function(id,callback){
        const tvehicle = await pool.query('SLECT * FROM TVehiculo WHERE idTVehiculo = ?',[id],callback);
        return tvehicle;
    },
    addTVehicle: async function(newTVehicle,callback){
        const tvehicle = await pool.query('INSERT INTO TVehiculo SET ?',[newTVehicle],callback);
        return tvehicle;
    },
    editTVehicle: async function(id,newTVehicle,callback){
        const tvehicle = await pool.query('UPDATE TVehiculo SET ? WHERE idTVehiculo = ?',[newTVehicle,id],callback);
        return tvehicle;
    },
    deleteTVehicle: async function(id,callback){
        const tvehicle = await pool.query('DELETE FROM TVehiculo WHERE idTVehiculo = ?',[id],callback);
        return tvehicle;
    }
};

module.exports = TVehicle;