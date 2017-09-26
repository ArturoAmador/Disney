define(["app","js/logros/logrosView", "js/logros/logrosModel"], function(app, logrosView, logros) {
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
		console.log('logros Controller');
		logrosView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});