const express = require("express");
const router = express.Router();
const Ranges = require("../modell/ranges");
const { isLoggedIn } = require("../lib/auth");

//Route for list all ranges
router.get("/", isLoggedIn, async (req, res) => {
  const ranges = await Ranges.listRanges(function(err, rows) {});
  res.render("ranges/listRanges", { ranges });
});

//Route for to show the view "newRange"
router.get("/add", isLoggedIn, (req, res) => {
  res.render("ranges/newRange");
});

//Route for to add a new range
router.post("/add", isLoggedIn, async (req, res) => {
  const image = req.files.image;
  const { Rango } = req.body;
  const newRange = {
    image: image.name,
    Rango
  };
  console.log(newRange);
  await Ranges.addRange(newRange, function(err, rows) {
    if (err) {
      console.log("hola", err);
    } else {
      res.json(rows);
    }
  });
  image.mv(`./src/public/files/${image.name}`, err => {});
  req.flash("success", "Rango creado con exito");
  res.redirect("/ranges");
});

//Route for to show the view to update a range selected
router.get("/edit/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const range = await Ranges.listRangeId(id, function() {});
  res.render("ranges/editRange", { range: range[0] });
});

//Route for edit a range selected by its id
router.post("/edit/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const image = req.files.image;
  const { Rango } = req.body;
  const newRange = {
    Rango,
    image: image.name
  };
  await Ranges.editRange(id, newRange, function() {});
  image.mv(`./src/public/files/${image.name}`, err => {});
  req.flash("success", "Rango actualizado con éxito");
  res.redirect("/ranges");
});

//Route for delete a range selected by its id
router.get("/delete/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  await Ranges.delRange(id, function() {});
  req.flash("success", "Rango eliminado con exito");
  res.redirect("/ranges");
});

module.exports = router;