define(["app","js/index/indexView", "js/index/indexModel"], function(app, IndexView, Index) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	},
	{
		element:'.contacto',
		event:'click',
		handler:contacto
	},
	{
		element:'.donaciones',
		event:'click',
		handler:donaciones
	},
	{
		element:'.news',
		event:'click',
		handler:news
	},
	{
		element:'.video',
		event:'click',
		handler:video
	},
	{
		element:'.logros',
		event:'click',
		handler:logros
	},
	{
		element:'.home',
		event:'click',
		handler:home
	}];	

	function home(){
		console.log("Index");
		app.f7.mainView.loadPage('index.html');
	}

	function logros(){
		console.log("logros");
		app.f7.mainView.loadPage('logros.html');
	}

	function video(){
		console.log("video");
		app.f7.mainView.loadPage('video.html');
	}

	function news(){
		console.log("news");
		app.f7.mainView.loadPage('news.html');
	}

	function contacto(){
		console.log("contacto");
		app.f7.mainView.loadPage('contacto.html');
	}

	function about(){
		console.log("about");
		app.f7.mainView.loadPage('about.html');
		
	}

	function donaciones(){
		console.log("donaciones");
		app.f7.mainView.loadPage('donaciones.html');
	}

	
	

	function init(query){	
		console.log('Index Controller');
		IndexView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});