const express = require ('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySqlStore = require('express-mysql-session');
const passport = require('passport');
const fileUpload = require('express-fileupload');
const {database} = require('./keys');

//Initializations 
const app = express();
require('./lib/passport');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
    helpers:{
        // Function to do basic mathematical operation in handlebar
        math: function(lvalue, operator, rvalue) {lvalue = parseFloat(lvalue);
            rvalue = parseFloat(rvalue);
            return {
                "+": lvalue + rvalue,
                "-": lvalue - rvalue,
                "*": lvalue * rvalue,
                "/": lvalue / rvalue,
                "%": lvalue % rvalue
            }[operator];
        }
}}));
app.set('view engine','.hbs');

//Midlewars
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MySqlStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());

//Global variable
app.use((req,res,next) =>{
    app.locals.success = req.flash('success'); 
    app.locals.message = req.flash('message');
    app.locals.user = req.user; 
    next();
})

//Routes
app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/links',require('./routes/links'));
app.use('/users',require('./routes/users'));
app.use('/ranges',require('./routes/ranges'));
app.use('/address',require('./routes/provinces'));
app.use('/provinces',require('./routes/provinces'));
app.use('/cantones',require('./routes/cantones'));
app.use('/support',require('./routes/support'));
app.use('/cause',require('./routes/cause'));
app.use('/days',require('./routes/days'));
app.use('/death',require('./routes/death'));
app.use('/notice',require('./routes/notice'));
app.use('/start',require('./routes/start'));
app.use('/roles',require('./routes/roles'));
app.use('/emergency',require('./routes/emergency'));


//Public
app.use(express.static(path.join(__dirname,'public')));


//Starting the server
app.listen(app.get('port'),() =>{
    console.log('Server on port ',app.get('port'))
});