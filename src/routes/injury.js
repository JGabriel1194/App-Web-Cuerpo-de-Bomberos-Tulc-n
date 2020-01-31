const express = require('express');
const router = express.Router();
const Injury = require('../modell/injury');
const {isLoggedIn} = require('../lib/auth');


//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Injury.listInjury(function(err,injury){
        if(err){
            console.log(err);
            res.render('injury/listInjury');
        }else{
            res.render('injury/listInjury',{injury});
        }
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const {TLesion} = req.body;
    const newInjury = {
        TLesion
    };
    await Injury.addInjury(newInjury,function(err){
        if(err){
            console.log('Revisar error',err);
            res.redirect('/injury');
        }else{
            req.flash('success','Registro creado con éxito');
            res.redirect('/injury');
        }
    });
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