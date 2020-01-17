const pool = require('../database');

var Emergencies ={
    listEmergency: async function(callback){
        const emergency = await pool.query('SELECT * FROM TEmergencia',callback);
        return emergency;
    },
    listEmergencyId: async function(id,callback){
        const emergency = await pool.query('SELECT * FROM TEmergencia WHERE idTEmergencia = ?',[id],callback);
        return emergency;
    },
    addEmergency: async function(newEmergency,callback){
        const emergency = await pool.query('INSERT INTO TEmergencia SET ?',[newEmergency],callback);
        return emergency;
    },
    editEmergency: async function(id,newEmergency,callback){
        const emergency = await pool.query('UPDATE TEmergencia SET ? WHERE idTEmergencia = ?',[newEmergency,id],callback);
        return emergency;
    },
    deleteEmergency: async function(id,callback){
        const emergency = await pool.query('DELETE FROM TEmergencia WHERE idTEmergencia = ?',[id],callback);
        return emergency;
    }
}

module.exports = Emergency;