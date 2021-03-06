const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const custommiddleware = require('./config/middleware');
var multer  = require('multer');

app.use(sassMiddleware({
    src: './assests/scss',
    dest: './assests/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'

}));


app.use(express.urlencoded(({
    extended: true
})));

app.use(cookieParser());

app.use(express.static('./assests'));
app.use('/uploads',express.static(__dirname +'/uploads'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine   
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: "codeial",
    secret: "blahblah",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 50 * 100),
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    }, function (err) {
        console.log(err || 'connect setup');
    })

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(custommiddleware.setflash);
// use express router
app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});