const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');

//Log In
passport.use('local.signin', new LocalStrategy({
    usernameField: 'Cedula',
    passwordField: 'Contrasenia',
    passReqToCallback: true
}, async (req,Cedula,Contrasenia,done) =>{
    
    const rows = await pool.query('SELECT * FROM Personal WHERE Cedula = ?', [Cedula]);
    //console.log(rows[0]);
    if(rows.length > 0){
        const user = rows[0];
        const validPassword = await helpers.matchPassword(Contrasenia,user.Contrasenia);
        if(validPassword){
            done(null,user,req.flash('success','Bienvenido ' + user.Nombres ));
        }else{
            done(null,false,req.flash('message','Contraseña Incorrecta'))
        }
    }else{
        return done (null,false,req.flash('message','Nombre de usuario no existe'))
    }
}));

//Singin UP
passport.use('local.signup',new LocalStrategy({
    usernameField: 'Cedula',
    passwordField: 'Contrasenia',
    passReqToCallback: true
},async (req,Cedula,Contrasenia,done)=>{
    const {Nombres,Apellidos} = req.body;
    const newUser = {
        Cedula,
        Nombres,
        Apellidos,
        Contrasenia
    };
    newUser.Contrasenia = await helpers.encryptPassword(Contrasenia);

    const result = await pool.query('INSERT INTO Personal SET ?', [newUser]);
    newUser.idPersonal = result.insertId;
    return done(null,newUser);
}));

passport.serializeUser((user,done)=>{
    done(null,user.idPersonal);
});

passport.deserializeUser(async (idPersonal, done) =>{
    const rows = await pool.query('SELECT * FROM Personal WHERE idPersonal = ?', [idPersonal]);
    done (null,rows[0]);
});

