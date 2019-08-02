var keystone = require('keystone'),
	Composition = keystone.list('Composition'),
	async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.data = {};

	view.on('init', function(next) {

		async.waterfall([
			function(callback) {
		
				keystone.list('Composition').model.findOne({
					slug: req.params.composition
				}).exec(function(err, result) {
					callback(null, result);
				});
			}
		], function(err, result) {

			if (err) {
				next(err);
			} else {
				locals.composition = req.params.composition;
				locals.data.composition = result;
				next();
			}
		});
	});

	view.render('composition', {
		section: 'composition'
	});
}