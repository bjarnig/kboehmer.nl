var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.blog);
	app.get('/articles/:category?', routes.views.blog);
	app.get('/blog', routes.views.blog);
	app.get('/news', routes.views.blog);
	app.get('/contact', routes.views.page);
	app.get('/foundation', routes.views.page);
	app.get('/konrad-boehmer', routes.views.page);
	app.get('/alumni', routes.views.page);
	app.get('/research', routes.views.page);
	app.get('/admission', routes.views.page);
	app.get('/downloads', routes.views.page);
	app.get('/news/:post', routes.views.post);
	app.get('/pages/:page', routes.views.page);
	app.get('/compositions/:composition', routes.views.composition);
	app.get('/gallery', routes.views.gallery);
	app.get('/teachers/:teacher', routes.views.teacher);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
}