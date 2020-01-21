const express = require('express');
const router = express.Router();
const Provinces = require('../modell/provinces');
const Cantones = require('../modell/cantones');
const Parish = require('../modell/parish');
const {isLoggedIn} = require('../lib/auth');

//Route for list all province
router.get('/',isLoggedIn,async (req,res)=>{
    await Provinces.listProvinces(function(err,provinces){
        if(err){
            console.log(err);
        }else{
            Cantones.listCnatones(function(err,cantones){
                if(err){
                    console.log(err);
                }else{
                    Parish.listParish(function(err,parish){
                        if(err){
                            console.log(err);
                        }else{
                            res.render('address/listLocations',{provinces,cantones,parish});
                        }
                    });
                }
            });
        }
    });
});

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
    await Provinces.addProvince(newProvince,function(err,rows){
        if(err){
            console.log(err);
        }else{
            req.flash('success',"Provincia creada con exito");
            res.redirect('/provinces');
        }
    });
});

//Router for to show the view to update a province selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Provinces.listProvinceId(id,function(err,province){
        if(err){
            console.log(err);
        }else{
            res.render('provinces/editProvince',{province: province[0]});
        }
    });
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
            console.log(err);
        }else{
            req.flash("success", "Provincia actualizada con exito");
            res.redirect('/provinces');
        }
    });
});

//Router for delete a range selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Provinces.delProvince(id,function(err){
        if (err) {
            req.flash("message", "Registro usado en otra tabla. No se puede eliminar");
            res.redirect('/Provinces')
        } else {
            req.flash('success','Provincia eliminada con exito');
            res.redirect('/Provinces')
        }
    });
});
module.exports = router;