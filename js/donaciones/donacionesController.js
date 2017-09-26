define(["app","js/donaciones/donacionesView", "js/donaciones/donacionesModel"], function(app, donacionesView, donaciones) {
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
		console.log('donaciones Controller');
		donacionesView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});