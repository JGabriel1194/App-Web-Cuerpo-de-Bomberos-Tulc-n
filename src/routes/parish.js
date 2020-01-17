const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const Provinces = require('../modell/provinces');
const Cantones = require('../modell/cantones');
const Parish = require('../modell/parish');

//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    const provinces = await Provinces.listProvinces(function(){});
    const cantones = await Cantones.listCnatones(function(){});
    const parish = await Parish.listParish(function(){});
    res.render('adderss/listLocations',{provinces,cantones,parish});
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('parish/newParish');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {Parroquia,idCanton} = req.body;
    const newParish = {
        Parroquia,
        idCanton
    } 
    await Parish.addParish(newParish,function(){});
    req.flash('success','Parroquia creada con éxito');
    res.redirect('/parish');
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const parish = await Parish.listParishId(id,function(){});
    res.render('parish/editParish',{parish: parish[0]});
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{

});

module.exports = router;