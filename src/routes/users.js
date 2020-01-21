const express = require ('express');
const router = express.Router();
const Users = require('../modell/users');
const Ranges = require('../modell/ranges');
const Roles = require('../modell/roles');
const passport = require('passport');
const {isLoggedIn , isNotLoggedIn} = require('../lib/auth');

router.get ('/',isLoggedIn,async(req,res)=>{
    const users = await Users.listUsers(function(){
         
    });
    res.render('users/listUsers',{users});
});

router.get('/add',isLoggedIn,async (req,res)=>{
    await Ranges.listRanges(function(err,ranges){
        if(err){
            req.flash('message','Error al cargar Rangos');
            res.redirect('/users');
        }else{
            Roles.listRoles(function(err,roles){
                if(err){
                    req.flash('message','Error al cargar Roles');
                    res.redirect('/users');
                }else{
                    res.render('users/newUser',{ranges,roles});
                }
            });
        }
    });
});

router.post('/add',isLoggedIn, passport.authenticate('local.signup',{
    successRedirect: '/users',
    failureRedirect: '/users',
    failureFlash: true
}));

router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Users.listUserId(id,function(err,user){
        if(err){

        }else{
            Ranges.listRanges(function(err,ranges){
                if(err){

                }else{
                    Roles.listRoles(function(err,roles){
                        if(err){

                        }else{
                            res.render('users/editUser',{user: user[0],ranges,roles});
                        }
                    });
                }
            });
        }
    }); 
    
});

router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    
    Users.deleteUser(id,function(err,rows){
        if(err){
            console.log(err);
        }else{
            req.flash("success", "Usuario eliminado con exito");
            res.redirect('/users')
        }
    });
    
});
module.exports = router;
