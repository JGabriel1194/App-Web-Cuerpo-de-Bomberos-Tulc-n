const pool = require('../database');

var Parish = {
    listParish: async function(callbak){
        const Parish = await pool.query('SELECT par.idParroquia, par.Parroquia, can.Canton FROM Parroquia par LEFT JOIN Canton can ON can.idCanton = par.idCanton;',callbak);
        return Parish;
    },
    listParishId: async function(id,callbak){
        const Parish = await pool.query('SELECT * FROM Parroquia Where idParroquia ?', [id],callbak);
        return Parish;
    },
    addParish: async function(newParish,callbak){
        const Parish = await pool.query('INSERT INTO Parroquia SET ?',[newParish],callbak);
        return Parish;
    },
    editParish: async function(id,newParish,callbak){
        const Parish = await pool.query('UPDATE Parroquia SET ? WHERE idParroquia = ?',[newParish,id],callbak);
        return Parish;
    },
    delParish: async function(id,callbak){
        const Parish = await pool.query('DELETE FROM Parroquia WHERE idParroquia = ?',[id],callbak);
        return Parish;
    }
}

module.exports = Parish;