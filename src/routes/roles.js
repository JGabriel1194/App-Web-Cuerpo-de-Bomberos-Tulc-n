const express = require('express');
const router = express.Router();
const Roles = require('../modell/roles');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Roles.listRoles(function(err,role){
        if(err){
            console.log('Revisar error',err);
            res.render('roles/listRoles');
        }else{
            res.render('roles/listRoles',{role});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    res.render('roles/newRole');
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {Rol} = req.body;
    const newRol = {
        Rol
    };
    await Roles.addRole(newRol,function(err){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/roles');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/roles');
        }
    });
});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Roles.listRoleId(id,function(err,role){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.redirect('/roles');
        }else{
            res.render('roles/editRole',{role: role[0]});
        }
    });
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {Rol} = req.body;
    const newRol = {
        Rol
    };
    await Roles.editRole(id,newRol,function(err){
        if(err){
            console.log('Revisar error',err);
            req.flash('message','Error al editar');
            res.redirect('/roles');
        }else{
            req.flash('success','Registro acutalizado con éxito');
            res.redirect('/roles');
        }
    });
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Roles.deleteRole(id,function(err){
        if(err){
            req.flash('message','No se puede eliminar');
            res.redirect('/roles');
        }else{
            req.flash('success','Registro eliminado con éxito');
            res.redirect('/roles');
        }
    })
});

module.exports = router;