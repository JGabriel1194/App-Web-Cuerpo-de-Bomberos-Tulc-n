const express = require('express');
const router = express.Router();
const Cause = require('../modell/cause');
const {isLoggedIn} = require('../lib/auth');

//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Cause.listCause(function(err,cause){
        if(err){
            console.log(err);
            res.render('cause/listCause');
        }else{
            res.render('cause/listCause',{cause});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('cause/newCause');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {Causa} = req.body;
    const newCause = {
        Causa
    };
    await Cause.addCause(newCause,function(err,cause){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/cause');
        }else{
            req.flash('success','Causa creada con éxito');
            res.redirect('/cause');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Cause.listCauseId(id,function(err,cause){
        if(err){
            console.log(err);
            req.flash('message','Error al Editar')
            res.redirect('/cause');
        }else{
            res.render('cause/editCause',{cause: cause[0]}); 
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const { Causa } = req.body;
    const newCausa = {
        Causa
    };
    await Cause.editCause(id,newCausa,function(err,cause){
        if(err){
            req.flash('message','Error al editar la causa de incendio');
            res.redirect('/cause');
        }else{
            req.flash('success','Causa actualizada con exito');
            res.redirect('/cause');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Cause.deleteCause(id,function(err,cause){
        if(err){
            req.flash('message','No se puede elimiar');
            res.redirect('/cause');
        }else{
            req.flash('success','Causa eliminada con éxito');
            res.redirect('/cause');
        }
    });
});

module.exports = router;