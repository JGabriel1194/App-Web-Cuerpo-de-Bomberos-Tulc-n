const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const Death = require('../modell/death');

//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Death.listDeath(function(err,death){
        if(err){
            console.log(err);
            res.render('death/listDeath');
        }else{
            res.render('death/listDeath',{death});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('death/newDeath');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {CMuerte} = req.body;
    const newDeath = {
        CMuerte
    };
    await Death.addDeath(newDeath,function(err,death){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al crear registro');
            res.redirect('/death');
        }else{
            req.flash('success','Causa creada con exito');
            res.redirect('/death');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Death.listDeathId(id,function(err,death){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.redirect('/death');
        }else{
            res.render('death/editDeath',{death: death[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {CMuerte} = req.body;
    const newDeath = {
        CMuerte
    };
    await Death.editDeath(id,newDeath,function(err,death){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar registro');
            res.redirect('/death');
        }else{
            req.flash('success','Registro actualizado con éxito');
            res.redirect('/death');
        }
    });
}); 

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Death.deleteDeath(id,function(err,death){
        if(err){
            req.flash('message','No se puede eliminar este registro');
            res.redirect('/death');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/death');
        }
    })
});

module.exports = router;