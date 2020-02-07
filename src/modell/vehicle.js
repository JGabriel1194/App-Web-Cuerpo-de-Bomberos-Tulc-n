const pool = require('../database');

var Vehicle = {
    listVehicle: async function(callback){
        const tvehicle = await pool.query('SELECT * FROM Vehiculo',callback);
        return tvehicle;
    },
    listVehicleId: async function(id,callback){
        const tvehicle = await pool.query('SELECT * FROM Vehiculo WHERE idVehiculo = ?',[id],callback);
        return tvehicle;
    },
    addVehicle: async function(newTVehicle,callback){
        const tvehicle = await pool.query('INSERT INTO Vehiculo SET ?',[newTVehicle],callback);
        return tvehicle;
    },
    editVehicle: async function(id,newTVehicle,callback){
        const tvehicle = await pool.query('UPDATE Vehiculo SET ? WHERE idVehiculo = ?',[newTVehicle,id],callback);
        return tvehicle;
    },
    deleteVehicle: async function(id,callback){
        const tvehicle = await pool.query('DELETE FROM Vehiculo WHERE idVehiculo = ?',[id],callback);
        return tvehicle;
    }
};

module.exports = Vehicle;