const pool = require("../database");

var Ranges = {
  listRanges: async function(callback) {
    const range = await pool.query("SELECT * FROM Rango",callback);
    return range;
  },
  listRangeId: async function(id,callback){
    const range = await pool.query("SELECT * FROM Rango WHERE idRango = ?",[id],callback);
    return range;
  },
  addRange: async function(newRange,callback){
    const range = await pool.query('INSERT INTO Rango SET ?',[newRange],callback);
    return range;
  },
  editRange: async function(id,newRange,callback){
    const range = await pool.query("UPDATE Rango SET ? WHERE idRango = ?",[newRange,id],callback)
    return range;
  },
  delRange: async function(id,callbak){
    const range = await pool.query("DELETE FROM Rango WHERE idRango = ?",[id],callbak);
    return range;
  },
  upload: function(){
    
  }

};

module.exports = Ranges;
