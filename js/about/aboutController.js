define(["app","js/about/aboutView", "js/about/aboutModel"], function(app, aboutView, about) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	}];	

	function about(){
		console.log("about");
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