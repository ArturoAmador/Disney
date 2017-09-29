define(["app","js/about/aboutView", "js/about/aboutModel"], function(app, aboutView, about) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	},
	{
		element: '.prueba',
		event: 'click',
		handler: prueba,
	},
	{
		element: '.dona',
		event: 'click',
		handler: dona,
	},
	{
		element: '.index',
		event: 'click',
		handler: index,
	},
	{
		element: '.join',
		event: 'click',
		handler: join,
	}];	


	function join(){
		app.f7.mainView.loadPage('contacto.html');
	}

	function index(){
		app.f7.mainView.loadPage('index.html');
	}


	function dona(){
		app.f7.mainView.loadPage('donaciones.html');
	}

	function about(){
		console.log("about");
	}

	function prueba() {
		console.log("prueba")
		$("#CARD_1").removeClass('hide');
		$("#CARD_1").animate({
			height: 'toggle'
		});
	}
	

	function init(query){	
		console.log('about Controller');
		aboutView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});