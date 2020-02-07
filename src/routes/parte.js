const express = require('express');
const router = express.Router();
const Emergency = require('../modell/emergency');
const Days = require('../modell/days');
const Notice = require('../modell/notice');
const Province = require('../modell/provinces');
const Canton = require('../modell/cantones');
const Parish = require('../modell/parish');
const {isLoggedIn} = require('../lib/auth');
const Role = require('../modell/roles');

//Router for to show all data
router.get('/',isLoggedIn,async(req,res)=>{
    await Role.listRoles(function(err,role){
        if(err){

        }else{
            res.render('parte/listPartes',{role})
        };
    });
});

//Router for to show the view newData
router.get('/add',isLoggedIn,async(req,res)=>{
    await Emergency.listEmergency(function(err,emergency){
        if(err){
            console.log('Err. Emergency',err);
            res.render('parte/newParte');
        }else{
            Days.listDays(function(err,days){
                if(err){
                    console.log('Err. Days',err);
                    res.render('parte/newParte');
                }else{
                    Notice.listNotice(function(err,notice){
                        if(err){
                            console.log('Err. Notice',err);
                            res.render('parte/newParte');
                        }else{
                            Province.listProvinces(function(err,provinces){
                                if(err){
                                    console.log('Err. Province',err);
                                    res.render('parte/newParte');
                                }else{
                                    res.render('parte/newParte',{
                                        emergency,
                                        days,
                                        notice,
                                        provinces
                                    });  
                                };
                            });
                        };
                    });
                };
            });
        };
    });
});

//Router for to add a new data
router.post('/add',isLoggedIn,async(req,res)=>{
    const newParte =  {
        idTEmergencia: req.body.idTEmergencia,
        idCDia: req.body.idCDia,
        Fecha: req.body.Fecha,
        idUnidad: req.body.idUnidad,
        Apoyo: req.body.Apoyo,
        idFAviso: req.body.idFAviso,
        HAviso: req.body.HAviso,
        HSalida: req.body.HSalida,
        HLugar: req.body.HLugar,
        HFin: req.body.HFin,
        HCuartel: req.body.HCuartel,
        idProvincia: req.body.idProvincia,
        idCanton: req.body.idCanton,
        idParroquia: req.body.idParroquia,
        Direccion: req.body.Direccion,
        Telefono: req.body.Telefono,
        Sector: req.body.Sector,
        TSector: req.body.TSector,
        Otros: req.body.Otros
    };
    console.log(newParte);
    res.redirect('/parte')
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