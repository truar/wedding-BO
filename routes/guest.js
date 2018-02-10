var _ = require('lodash');
var Guest = require('../models/guest_model.js')

// cree une sorte de fonction a appelé dans index.js
module.exports = function(app) {

	/* Create */
	app.post('/guest', function (req, res) {
		var newGuest = new Guest(req.body);
		newGuest.save(function(err, guest, row) {
			if(err) {
				res.json({ info: 'Error during guest creation', error: err });
				return;
			};
			res.json({ info: 'Guest created successfully', data: guest, rowCreated: row});
		});
	});

	app.get('/guest', function(req, res) {
		Guest.find(function(err, guests) {
			if(err) {
				res.json({ info: 'Error during find guests', error: err });
				return;
			};
			res.json({ info: 'Guests found successfully', data: guests });
		});
    });

	app.get('/guest/:id', function(req, res) {
		Guest.findById(req.params.id, function(err, guest) {
			if(err) {
				res.json({ info: 'Error during find guest', error: err });
				return;
			};
			if(guest) {
				res.json({ info: 'Guest found successfully', data: guest });
			} else {
				res.json({ info: 'Guest not found' });
			}
			
		});
    });
    
    // Login function
    app.post('/guest/login/:id', function(req, res, next) {
        Guest.findOne({"id": req.params.id}, function(err, guest) {
            if(err) {
				res.json({ info: 'Error during find guest', error: err });
				return;
			};
			if(guest) {
				if(guest.password !== req.body.password) {
					res.status(403).json({ error: 'Wrong username/password couple' });
				}
				else {
					res.json({ info: 'Guest found successfully', data: guest });
				}
			} else {
				res.json({ info: 'Guest not found' });
			}
        });
	});

	app.put('/guest/:id', function(req, res) {
		Guest.findOneAndUpdate({
			_id: req.params.id
		}, req.body, function(err, oldGuest) {
			if(err) {
				res.json({ info: 'Error during update Guest', error: err });
				return;
			};
			if(oldGuest) {
				res.json({ info: 'Guest update successfully', data: oldGuest });
			} else {
				res.json({ info: 'Guest not found' });
			}
		});
	});
	
	app.delete('/guest/:id', function(req, res) {
		Guest.findOneAndRemove({
			_id: req.params.id
		}, function(err, deletedGuest) {
			if(err) {
				res.json({ info: 'Error during guest deletion', error: err });
				return;
			};
			if(deletedGuest) {
				res.json({ info: 'Guest deleted successfully', data: deletedGuest });
			} else {
				res.json({ info: 'Guest not found' });
			}
		});
	});

}