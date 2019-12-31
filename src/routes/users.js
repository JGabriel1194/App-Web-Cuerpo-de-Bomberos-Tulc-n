const express = require ('express');
const router = express.Router();
const pool = require('../database');
const Users = require('../modell/users');
const Ranges = require('../modell/ranges');
const Roles = require('../modell/role');
const passport = require('passport');
const {isLoggedIn , isNotLoggedIn} = require('../lib/auth');

router.get ('/',isLoggedIn,async(req,res)=>{
    const users = await Users.listUsers(function(){
         
    });
    res.render('users/listUsers',{users});
});

router.get('/add',isLoggedIn,async (req,res)=>{
    const ranges = await Ranges.listRanges(function(){

    });

    const roles = await Roles.listRoles(function(){

    });
    res.render('users/newUser',{ranges,roles});
});

router.post('/add',isLoggedIn, passport.authenticate('local.signup',{
    successRedirect: '/users',
    failureRedirect: '/add',
    failureFlash: true
}));

router.get('/delete/:idPersonal',isLoggedIn,async(req,res)=>{
    const {idPersonal} = req.params;
    
    Users.deleteUser({idPersonal},function(){

    });
    res.redirect('/users')
});
module.exports = router;
