const pool = require('../database');

var Notices ={
    listNotice: async function(callback){
        const notice = await pool.query('SELECT * FROM FAviso',callback);
        return notice;
    },
    listNoticeId: async function(id,callback){
        const notice = await pool.query('SELECT * FROM FAviso WHERE idFAviso = ?',[id],callback);
        return notice;
    },
    addNotice: async function(newNotice,callback){
        const notice = await pool.query('INSERT INTO FAviso SET ?',[newNotice],callback);
        return notice;
    },
    editNotice: async function(id,newNotice,callback){
        const notice = await pool.query('UPDATE FAviso SET ? WHERE idFAviso = ?',[newNotice,id],callback);
        return notice;
    },
    deleteNotice: async function(id,callback){
        const notice = await pool.query('DELETE FROM FAviso WHERE idFAviso = ?',[id],callback);
        return notice;
    }
};

module.exports = Notices;