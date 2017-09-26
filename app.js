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
		pushState: true,
		pushStateSeparator:'#',
		pushStateOnLoad:true,
		material: true,
		modalTitle: 'NovoCalli',
		animateNavBackIcon: true
	});
	var mainView = f7.addView('.view-main', {
		dynamicNavbar: true
	});

	
	return {
		f7: f7,
		mainView: mainView,
		router: Router
	};
});