const pool = require('../database');

var Phone = {
    listPhones: async function(callback){
        const phones = await pool.query('SELECT * FROM Telefono',callback);
        return phones;
    },
    listPhoneId: async function(id,callback){
        const phones = await pool.query('SLECT * FROM Telefono WHERE idTelefono = ?',[id],callback);
        return phones;
    },
    addPhone: async function(newPhone,callback){
        const phones = await pool.query('INSERT INTO Telefono SET ?',[newPhone],callback);
        return phones;
    },
    editPhone: async function(id,newPhone,callback){
        const phones = await pool.query('UPDATE Telefono SET ? WHERE idTelefono = ?',[newPhone,id],callback);
        return phones;
    },
    deletePhone: async function(id,callback){
        const phones = await pool.query('DELETE FROM Telefono WHERE idTelefono = ?',[id],callback);
        return phones;
    }
};

module.exports = Phone;