const express = require('express');
const router = express.Router();
const Provinces = require('../modell/provinces');
const Cantones = require('../modell/cantones');
const Parish = require('../modell/parish');
const {isLoggedIn} = require('../lib/auth');

//Route for list all cantones
router.get('/',isLoggedIn,async(req,res)=>{
    const provinces = await Provinces.listProvinces(function(){});
    const cantones = await Cantones.listCnatones(function(){});
    const parish = await Parish.listParish(function(){});
    res.render('address/listLocations',{provinces,cantones,parish});
});

//Router for to show the view newCanton
router.get('/add',isLoggedIn,(req,res)=>{
    res.render('canton/newCanton');
});

//Router for to add a new Canton
router.post('/add',isLoggedIn,async(req,res)=>{
    const cant = req.body;
    console.log('hola',cant);
    const {Canton,idProvincia} = req.body;
    const newCanton = {
        Canton,
        idProvincia
    };
    console.log(newCanton);
    await Cantones.addCanton(newCanton,function(){});
    req.flash('success','Canton creado con exito');
    res.redirect('/cantones');
});

//Router for to show the view to update a canton selected
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const canton = await Cantones.listCantonId(id,function(){});
    const province = await Provinces.listProvinces(function(){});
    res.render('cantones/editCanton',{canton: canton[0],province});
});

//Router for to edit a canton selected by its id
router.post('/edit/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    const {Canton,idProvincia} = req.body;
    const newCanton = {
        Canton,
        idProvincia
    };
    await Cantones.editCanton(id,newCanton,function(){});
    req.flash('success',"Cantón editado con exito");
    res.redirect('/cantones');
});

//Router for to dellete a canton selected by its id
router.get('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Cantones.delCanton(id,function(){});
    req.flash('success','Cantón eliminado con exito');
    res.redirect('/cantones');
})
module.exports = router;