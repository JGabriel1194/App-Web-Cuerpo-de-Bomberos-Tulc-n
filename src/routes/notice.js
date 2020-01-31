const express = require('express');
const router = express.Router();
const Notice = require('../modell/notice');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Notice.listNotice(function(err,notice){
        if(err){
            console.log('Revisar error',err);
            res.render('notice/listNotice');
        }else{
            res.render('notice/listNotice',{notice});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('notice/newNotice');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {FAviso} = req.body;
    const newNotice = {
        FAviso
    };
    await Notice.addNotice(newNotice,function(err){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/notice');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/notice');
        }
    })
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Notice.listNoticeId(id,function(err,notice){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.redirect('/notice');
        }else{
            res.render('notice/editNotice',{notice: notice[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {FAviso} = req.body;
    const newNotice = {
        FAviso
    };
    await Notice.editNotice(id,newNotice,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar registro');
            res.redirect('/notice');
        }else{
            req.flash('success','Registro actualizado con exito');
            res.redirect('/notice');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Notice.deleteNotice(id,function(err){
        if(err){
            req.flash('message','El registro es usado en otra tabla');
            res.redirect('/notice');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/notice');
        }
    });
});

module.exports = router;