const pool = require("../database");

var Ranges = {
  listRanges: async function() {
    const range = await pool.query("SELECT * FROM Rango");
    return range;
  }
};

module.exports = Ranges;
