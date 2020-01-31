const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const Days = require('../modell/days');

//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Days.listDays(function(err,days){
        if(err){
            console.log(err);
            res.render('days/listDays');
        }else{
            res.render('days/listDays',{days});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('days/newDay');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {CDia} = req.body;
    const newDay = {
       CDia
    };
    await Days.addDay(newDay,function(err,days){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/days');
        }else{
            req.flash('success','Dia creado con éxito');
            res.redirect('/days')
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Days.listDayId(id,function(err,days){
        if(err){
            console.log('Revisar el error',err);
            req.flash('message','Error al editar');
            res.redirect('/days');
        }else{
            res.render('days/editDay',{days: days[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {CDia} = req.body;
    const newDay = {
        CDia
    };
    await Days.editDay(id,newDay,function(err,days){
        if(err){
            console.log('Resisar error',err);
            req.flash('message','Error al editar día');
            res.redirect('/days');
        }else{
            req.flash('success','Causa actualizada con éxito');
            res.redirect('/days');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Days.deleteDay(id,function(err,days){
        if(err){
            console.log('Revisar el error',err);
            req.flash('message','No se puede eliminar este registro');
            res.redirect('/days');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/days');
        }
    });
});

module.exports = router;