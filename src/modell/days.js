const pool = require('../database');

var Days = {
    listDays: async function(callback){
        const day = await pool.query('SELECT * FROM CDia',callback);
        return day;
    },
    listDayId: async function(id,callback){
        const day = await pool.query('SELECT * FROM CDia WHERE idCDia = ?',[id],callback);
        return day;
    },
    addDay: async function (newDay,callback){
        const day = await pool.query('INSERT INTO CDia SET ?',[newDay],callback);
        return day;
    },
    editDay: async function(id,newDay,callback){
        const day = await pool.query('UPDATE CDia SET ? WHERE idCDia = ?',[newDay,id],callback);
        return day;
    },
    deleteDay: async function(id,callback){
        const day = await pool.query('DELETE FROM CDia WHERE idCDia = ?',[id],callback);
        return day;
    }
}

module.exports = Days;