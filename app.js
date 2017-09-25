require.config({
	paths: {
		handlebars: "lib/handlebars",
		text: "lib/text",
		hbs: "lib/hbs"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	}
});
define('app', ['js/router'], function(Router) {
	Router.init();
	var f7 = new Framework7({
		material: true,
		modalTitle: 'eSommelier',
		animateNavBackIcon: true
	});
	var mainView = f7.addView('.view-main', {
		dynamicNavbar: true
	});

	var API = {
		url:"http://nerdytrust.com/esommelier/"
	};
	return {
		f7: f7,
		mainView: mainView,
		API:API,
		router: Router
	};
});