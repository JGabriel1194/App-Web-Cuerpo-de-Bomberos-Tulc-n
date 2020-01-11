const express = require('express');
const router = express.Router();
const Provinces = require('../modell/provinces');
const Cantones = require('../modell/cantones');
const {isLoggedIn} = require('../lib/auth');

//Route for list all province
router.get('/',isLoggedIn,async (req,res)=>{
    const provinces = await Provinces.listProvinces(function(){

    });
    const cantones = await Cantones.listCnatones(function(){

    });
    res.render('locations/listLocations',{provinces,cantones});
})

//Route for to show the view newProvince
router.get('/add',isLoggedIn,(req,res)=>{
    res.render('province/newProvince');
});

//Route for to add a new province
router.post('/add',isLoggedIn,async(req,res)=>{
    const {Provincia} = req.body;
    const newProvince = {
        Provincia
    };
    await Provinces.addProvince(newProvince,function(){});
    req.flash('success',"Provincia creada con exito");
    res.redirect('/locations')
});

module.exports = router;