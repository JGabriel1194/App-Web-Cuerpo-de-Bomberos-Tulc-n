const pool = require("../database");

var Ranges = {
  listRanges: async function() {
    const range = await pool.query("SELECT * FROM Rango");
    return range;
  },
  listRangeId: async function(id){
    const range = await pool.query("SELECT * FROM Rango WHERE idRango = ?",[id]);
    return range;
  },
  addRange: async function(newRange){
    const range = await pool.query('INSERT INTO Rango SET ?',[newRange]);
    return range;
  },
  editRange: async function(id,newRange){
    const range = await pool.query("UPDATE Rango SET ? WHERE idRango = ?",[newRange,id])
    return range;
  },
  delRange: async function(id){
    const range = await pool.query("DELETE FROM Rango WHERE idRango = ?",[id])
    return range;
  },
  upload: function(){
    
  }

};

module.exports = Ranges;
