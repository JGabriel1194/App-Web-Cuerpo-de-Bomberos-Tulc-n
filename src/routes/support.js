const express = require('express');
const router = express.Router();
const Support = require('../modell/support');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Support.listSupports(function(err,supports){
        if(err){
            console.log(err);
            res.render('support/listSupport');
        }else{
            console.log(supports);
            res.render('support/listSupport',{supports});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{

});

//Router for to show the view to update a data selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    
});

//Router for update a data selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    
});

//Router for delete a data selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{

});

module.exports = router;