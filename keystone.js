// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv')().load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.


keystone.init({

	'name': 'kboehmer',
	'brand': 'kboehmer',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '(E7(l.`s:E=Cc@P;4pQk36KlLV-#B_.?oz>5Rd:0s]0~vI,-<1S,b]n2@U1H+b^S',
	'mongo': 'mongodb://kb:asdf1234@lamppost.15.mongolayer.com:10153,lamppost.14.mongolayer.com:10175/app36136385'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'categories': 'page-categories',
	'pages': 'pages',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
