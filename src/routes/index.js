const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/mision',(req,res) =>{
    res.render('main/mision');
});

router.get('/vision',(req,res)=>{
    res.render('main/vision');
});

router.get('/institution',(req,res)=>{
    res.render('main/institution');
});
module.exports = router;