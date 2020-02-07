const express = require('express');
const router = express.Router();
const Local = require('../modell/local');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Local.listLocal(function(err,local){
        if(err){
            console.log('Revisar error',err);
            res.render('local/listLocal');
        }else{
            res.render('local/listLocal',{local});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('local/newLocal');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {TLocal} = req.body;
    const newLocal = {
        TLocal
    };
    await Local.addLocal(newLocal,function(err){
        if(err){
            console.log('Revisar err',err);
            res.redirect('/local');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/local');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Local.listLocalId(id,function(err,local){
        if(err){
            console.log('Reviar error',err);
            req.flash('message','Error al editar');
            res.redirect('/local');
        }else{
            req.flash('success','Registro actualizado con éxito');
            res.render('local/editLocal',{local: local[0]})
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {TLocal} = req.body;
    const newLocal = {
        TLocal
    };
    await Local.editLocal(id,newLocal,function(err){
        if(err){
            console.log('Revisar err',err);
            req.flash('message','Error al editar');
            res.redirect('/local');
        }else{
            req.flash('success','Registro actualizado con éxito');
            res.redirect('/local');
        }
    })
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Local.deleteLocal(id,function(err){
        if(err){
            console.log('Reviar error',err);
            req.flash('message','No se puede elimiar');
            res.redirect('/local');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/local');
        }
    });
});

module.exports = router;