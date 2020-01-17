const pool = require('../database');

var Parish = {
    listParish: async function(callbak){
        const Parish = await pool.query('SELECT par.idParroquia, par.Parroquia, can.Canton FROM Parroquia par LEFT JOIN Canton can ON can.idCanton = par.idCanton;');
        return Parish;
    },
    listParishId: async function(id){
        const Parish = await pool.query('SELECT * FROM Parroquia Where idParroquia ?', [id]);
        return Parish;
    },
    addParish: async function(newParish){
        const Parish = await pool.query('INSERT INTO Parroquia SET ?',[newParish]);
        return Parish;
    },
    editParish: async function(id,newParish){
        const Parish = await pool.query('UPDATE Parroquia SET ? WHERE idParroquia = ?',[newParish,id]);
        return Parish;
    },
    delParish: async function(id){
        const Parish = await pool.query('DELETE FROM Parroquia WHERE idParroquia = ?',[id]);
        return Parish;
    }
}

module.exports = Parish;