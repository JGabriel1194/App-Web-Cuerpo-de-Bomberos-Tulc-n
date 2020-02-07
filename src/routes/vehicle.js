const express = require('express');
const router = express.Router();
const Vehicle = require('../modell/vehicle');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Vehicle.listVehicle(function(err,vehicle){
        if(err){
            console.log('Revisar error',err)
            res.render('/vehicle');
        }else{
            res.render('vehicle/listVehicle',{vehicle})
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('vehicle/newVehicle');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const image = req.files.image;
    const {Placa,Color} = req.body;
    const newVehicle = {
        Placa,
        Color,
        image: image.name
    };
    console.log(newVehicle);
    await Vehicle.addVehicle(newVehicle,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al crear registro');
            res.redirect('/vehicle');
        }else{
            image.mv(`./src/public/files/${image.name}`, err => {});
            req.flash("success", "Registro creado con exito");
            res.redirect("/vehicle");
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Vehicle.listVehicleId(id,function(err,vehicle){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.redirect('/vehicle');
        }else{
            res.render('vehicle/editVehicle',{vehicle: vehicle[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const image = req.files.image;
    const {Placa,Color} = req.body;
    const newVehicle = {
        Placa,
        Color,
        image: image.name
    };
    await Vehicle.editVehicle(id,newVehicle,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.render('/vehicle');
        }else{
            req.flash('success','Registro actualizado con éxito');
            res.redirect('/vehicle');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Vehicle.deleteVehicle(id,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','No se puede eliminar');
            res.redirect('/vehicle');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/vehicle');
        }
    });
});

module.exports = router;