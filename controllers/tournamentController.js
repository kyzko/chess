let Tournament = require('../models/tournament');
let User = require('../models/user');

let tournamentController = {};

tournamentController.register = function(req, res) {
    console.log(` UserId = ${req.user_id}`);
    newTournament = new Tournament();
    newTournament.title = req.body.title;
    newTournament.start = req.body.start;
    newTournament.end = req.body.end;
    newTournament.status = 'registration';
    newTournament.system = req.body.system;
    newTournament.numberOfTours = req.body.numberOfTours;
    newTournament.organized = req.user._id;


    newTournament.save(function (err, saveTournament) {
        console.log(err);
        let setter = {
            tournaments: {
                organized: saveTournament._id
            }
        };
        User.findByIdAndUpdate(req.user.id, {
            $push: setter
        }, {
            new: true
        });
        console.log(saveTournament);
        res.render('edit', {tournament: saveTournament, user: req.user});
    })
};

tournamentController.all = function(req, res) {
    Tournament.find({}).then(result => res.render('allTournament', {tournaments: result, user: req.user}));
};

tournamentController.infouser = function(req, res) {
    Tournament.find({organized: req.user.id}).then(result => res.render('home', {user: req.user, tournament: result}));
}
;
module.exports = tournamentController;