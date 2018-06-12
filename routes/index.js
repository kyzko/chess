let express = require('express');
let router = express.Router();
let tournamentController = require('../controllers/tournamentController');

let isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
};

module.exports = function(passport){

    function authChecker(req, res, next) {
        if (req.user || req.path==='/' || req.path === '/signup' || req.path === '/login') {
            next();
        } else {
            res.redirect('/');
        }
    }

    router.use(authChecker);

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { message: req.flash('message') });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true
    }));

    /* GET Registration Page */
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));

    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res){
        tournamentController.infouser(req, res);
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    router.get('/main', function (req, res) {
        res.render('main', {user: req.user});
    });
    router.get('/index', function (req, res) {
        res.render('index');
    });
    router.get('/past', function (req, res) {
        res.render('past', {user: req.user});
    });
    router.get('/filigResult', function (req, res) {
        res.render('filigResult', {user: req.user});
    });
    router.get('/registerTour', function (req, res) {
        res.render('registerTour');
    });

    router.post('/registerTour', function (req, res) {
        tournamentController.register(req, res);
    });

    router.get('/allTournaments', function (req, res) {
        tournamentController.all(req, res);
    });

    router.get('/api/tournament/participants', function (req, res) {
        console.log(`i = ${req.body.data}`);
    });

    router.get('/register', function (req, res) {
        res.render('register');
    });
    return router;
};

