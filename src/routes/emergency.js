const express = require('express');
const router = express.Router();
const Emergency = require('../modell/emergency');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Emergency.listEmergency(function(err,emergency){
        if(err){
            res.render('emergency/listEmergency');
        }else{
            res.render('emergency/listEmergency',{emergency});
        }
    })
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('emergency/newEmergency');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {TEmergencia} = req.body;
    const newEmergency = {
        TEmergencia
    };
    await Emergency.addEmergency(newEmergency,function(err){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/emergency');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/emergency');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Emergency.listEmergencyId(id,function(err,emergency){
        if(err){
            console.log(err);
            req.flash('message','Error al Editar')
            res.redirect('/emergency');
        }else{
            res.render('emergency/editEmergency',{emergency: emergency[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {TEmergencia} = req.body;
    const newEmergency = {
        TEmergencia
    };
    await Emergency.editEmergency(id,newEmergency,function(err){
        if(err){
            console.log(err);
            req.flash('message','Error al Editar')
            res.redirect('/emergency');
        }else{
            req.flash('success','Registro actualizado con exito');
            res.redirect('/emergency');
        }
    })
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Emergency.deleteEmergency(id,function(err){
        if(err){
            req.flash('message','No se puede elimiar');
            res.redirect('/emergency');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/emergency');
        }
    })
});

module.exports = router;