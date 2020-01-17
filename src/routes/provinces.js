const express = require('express');
const router = express.Router();
const Provinces = require('../modell/provinces');
const Cantones = require('../modell/cantones');
const Parish = require('../modell/parish');
const {isLoggedIn} = require('../lib/auth');

//Route for list all province
router.get('/',isLoggedIn,async (req,res)=>{
    const provinces = await Provinces.listProvinces(function(){});
    const cantones = await Cantones.listCnatones(function(){});
    const parish = await Parish.listParish(function(){});
    res.render('address/listLocations',{provinces,cantones,parish});
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
    res.redirect('/provinces')
});

//Router for to show the view to update a province selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const province = await Provinces.listProvinceId(id,function(){});
    res.render('provinces/editProvince',{province: province[0]});
});

//Router for edit a province selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {Provincia} = req.body;
    const newProvince = {
        Provincia
    };
    await Provinces.editProvince(id,newProvince,function(err,rows){
        if(err){
            req.flash("message", "Error al crear provincia");
        }else{
            req.flash("success", "Provincia actualizada con exito");
        }
    });
    req.flash("success", "Provincia actualizada con exito");
    res.redirect('/provinces');
});

//Router for delete a range selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Provinces.delProvince(id,function(){});
    req.flash('success','Provincia eliminada con exito');
    res.redirect('/Provinces')
});
module.exports = router;