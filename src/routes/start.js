const express = require('express');
const router = express.Router();
const Start = require('../modell/start');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Start.listStart(function(err,start){
        if(err){
            console.log('Revisar error',err);
            res.render(start/listStart);
        }else{
            res.render('start/listStart',{start});
        }
    })
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('start/newStart');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {LInicio} = req.body;
    const newStart = {
        LInicio
    };
    await Start.addStart(newStart,function(err){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/start');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/start');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Start.listStartId(id,function(err,start){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/start');
        }else{
            res.render('start/editStart',{start: start[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {LInicio} = req.body;
    const newStart = {
        LInicio
    };
    await Start.editStart(id,newStart,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al actualizar registro');
            res.redirect('/start');
        }else{
            req.flash('success','Registro actualizado con éxito');
            res.redirect('/start');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Start.deleteStart(id,function(err){
        if(err){
            req.flash('message','Registro usado en otra tabla');
            res.redirect('/start');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/start');
        }
    });
});

module.exports = router;