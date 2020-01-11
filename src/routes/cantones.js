const express = require('express');
const router = express.Router();
const Cantones = require('../modell/cantones');
const Provincias = require('../modell/provinces');
const {isLoggedIn} = require('../lib/auth');

//Route for list all cantones
router.get('/',isLoggedIn,async(req,res)=>{
    const cantones = await Cantones.listCnatones(function(){});
    res.render('locations/listLocations',)
});

//Router for to show the view newCanton
router.get('/add',isLoggedIn,(req,res)=>{
    res.render('canton/newCanton');
});

//Router for to add a new Canton
router.post('/add',isLoggedIn,async(req,res)=>{
    const {Canton,idProvincia} = req.body;
    const newCanton = {
        Canton,
        idProvincia
    };
    await Cantones.addCanton(newCanton,function(){});
    req.flash('success','Canton creado con exito');
    res.redirect('/locations');
})

module.exports = router;