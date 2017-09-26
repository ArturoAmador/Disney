define(["app","js/contacto/contactoView", "js/contacto/contactoModel"], function(app, contactoView, contacto) {
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
		console.log('contacto Controller');
		contactoView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});